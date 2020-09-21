import constants from '@/commons/constants';
import store from '../store';
export const filters = {
    /**
     * 常量过滤器，接受常量代码
     * @param classCode
     * @param input
     * @returns {*}
     */
    constantsFilter(input, classCode) {
        if (!input && input !== 0 && input !== '0') {
            return '';
        }
        if (classCode !== undefined && input !== undefined) {
            return constants[classCode][input];
        } else {
            return '';
        }
    },

    /**
     * 格式化时间
     * @param {时间} time
     * @param {类型} type
     * @param {链接符} join
     */
    dateFormatFilter(time) {
        if (!time) return '';
        const date = new Date(time);
        const y = date.getFullYear();
        let m = date.getMonth() + 1;
        let d = date.getDate();
        let h = date.getHours();
        let min = date.getMinutes();
        let s = date.getSeconds();
        m = m < 10 ? '0' + m : m;
        d = d < 10 ? '0' + d : d;
        h = h < 10 ? '0' + h : h;
        min = min < 10 ? '0' + min : min;
        s = s < 10 ? '0' + s : s;

        return m + '/' + d + '/' + y + ' ' + h + ':' + min;
    },

    /**
     * 字典翻译
     * @param {*} input
     * @param {*} code
     */
    dicDescFilter(input, code) {
        const dic = store.state.data.dic[code] || [];
        let dicDesc = '';
        for (const item of dic) {
            if (item.dataCode === input) {
                dicDesc = item.dataDesc;
                break;
            }
        }
        return dicDesc;
    },

    picJsonFilter(input, code) {
        if (typeof input === 'undefined' || input === null) {
            return [];
        } else {
            const picObj = JSON.parse(input);
            return picObj[code];
        }
    }
};

const install = function (Vue) {
    for (const key of Object.keys(filters)) {
        Vue.filter(key, filters[key]);
    }
};

export default install;
