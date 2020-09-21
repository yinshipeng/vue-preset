const Storage = {
    set(key, value) {
        uni.setStorageSync(key, value);
    },

    get(key) {
        return uni.getStorageSync(key);
    },

    remove(key) {
        uni.removeStorageSync(key);
    }
};
const install = function (Vue) {
    Vue.prototype.$storage = Storage;
};

export default install;
