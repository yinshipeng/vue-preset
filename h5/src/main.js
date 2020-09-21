import Vue from 'vue';
import Request from './request';
import app from './app.vue';
import router from './router';
import './commons';
import store from './store';
import 'lib-flexible';
import SvgIcon from '@/components/SvgIcon/index.vue';

Vue.use(Request);
Vue.component('svg-icon', SvgIcon);
Vue.config.productionTip = process.env.NODE_ENV === 'production';

new Vue({
    router,
    store,
    render: h => h(app)
}).$mount('#app');
