import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './modules';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes
});

router.afterEach(() => {
    if (document.querySelector('.ak-container')) {
        document.querySelector('.ak-container').scrollTo(0, 0);
    }
});

export default router;
