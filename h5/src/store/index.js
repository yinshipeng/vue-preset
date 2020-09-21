import Vue from 'vue';
import Vuex from 'vuex';
import data from './modules/data';
Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        data
    },
    strict: process.env.NODE_ENV !== 'production'
});

export default store;
