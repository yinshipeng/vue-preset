import axios from 'axios';
import CryptoJS from '../libs/crypto.js';
import apis from './modules';
import { Notify } from 'vant';
import { loading } from '@/commons/loading';

const BaseUrl = '/rolloutapi';

let httpCount = 0;

/**
 * 请求拦截器
 */
axios.interceptors.request.use(
    function (config) {
        if (config.sld) {
            openLoading();
        }
        config.timeout = 60000;
        config.headers = config.header;
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);

/**
 * 封装http请求函数
 * @param {请求名称} name
 * @param {接口入参} data
 */
const request = function (name = '', data = {}) {
    let {
        url,
        method = 'post',
        header = {
            'content-type': 'application/json'
        },
        pem = false,
        sld = true
    } = getApi(name);
    header = getHeader(header, data);
    url = BaseUrl + url;

    const item = {
        url,
        header,
        method,
        data
    };

    if (
        item.method.toUpperCase() === 'GET' ||
        item.method.toUpperCase() === 'DELETE' ||
        item.method.toUpperCase() === 'PUT'
    ) {
        item.params = item.data;
    }

    return new Promise(resolve => {
        axios(item)
            .then(resp => {
                successHandler(resp, resolve);
            })
            .catch(err => {
                errorHandler(err.response);
            });
    }).finally(() => {
        closeLoading();
    });
};

/**
 * 接口处理
 * @param resp
 * @param resolve
 */
function successHandler(resp, resolve) {
    if (resp.request.responseType === 'arraybuffer') {
        resolve(resp.data);
    } else {
        if (resp.data.code === 200 || resp.config.pem) {
            resolve(resp.data);
        } else if (resp.data.code === 401) {
            if (location.pathname !== '/login') {
                location.href = '/login';
            }
        } else {
            errorHandler(resp);
        }
    }
}

/**
 * 错误接口处理
 * @param error
 */
function errorHandler(resp) {
    Notify({
        message:
            resp && resp.data ? `异常信息：${resp.data.message || resp.data.msg || '系统异常'}` : '异常信息：系统异常',
        color: '#ad0000',
        background: '#ffe1e1',
        duration: 3000
    });
    closeLoading();
}

/**
 * 封装请求头部信息
 * @param {头部信息} header
 * @param {接口入参} data
 */
const getHeader = function (header, data) {
    const reqtime = Date.now();
    const sign = getSign(reqtime, data);
    const token = localStorage.getItem('token') || '';
    const target = {
        token,
        reqtime,
        sign
    };
    return Object.assign({}, target, header);
};

/**
 * 封装接口秘钥
 * @param {时间戳} reqtime
 * @param {接口入参} data
 */
const getSign = function (reqtime, data) {
    const p = 'guoquan.com#2020|' + reqtime + '|' + JSON.stringify(data);
    const s = CryptoJS.MD5(p).toString();
    return s;
};

/**
 * 获取请求信息
 * @param {请求名称} name
 */
const getApi = function (name) {
    const api = apis.filter(v => {
        return v.name === name;
    });
    if (api.length === 0) {
        throw new Error(`未找到${name}对应的API服务地址`);
    } else {
        return api[0];
    }
};

/**
 * 打开加载浮层
 */
function openLoading() {
    if (httpCount === 0) {
        loading.open();
    }
    httpCount++;
}

/**
 * 关闭加载浮层
 */
function closeLoading() {
    if (httpCount > 0) {
        httpCount--;
    }
    if (httpCount === 0) {
        loading.close();
    }
}

/**
 * 封装插件
 * @param {*} Vue
 */
const install = function (Vue) {
    Vue.prototype.$request = request;
};

export default install;
