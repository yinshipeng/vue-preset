import { Toast } from 'vant';

export const loading = {
    open: function () {
        Toast.loading({
            duration: 0,
            forbidClick: true,
            loadingType: 'spinner',
            message: '加载中…'
        });
    },
    close: function () {
        Toast.clear();
    }
};

const install = function (Vue) {
    Vue.prototype.$loading = loading;
};

export default install;
