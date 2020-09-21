export default [
    {
        name: 'user',
        path: '/user',
        component: () => import('@/views/user'),
        meta: {
            title: '会员中心'
        }
    },
    {
        name: 'cart',
        path: '/cart',
        component: () => import('@/views/cart'),
        meta: {
            title: '购物车'
        }
    },
    {
        name: 'goods',
        path: '/goods',
        component: () => import('@/views/goods'),
        meta: {
            title: '商品详情'
        }
    },
    {
        name: 'home',
        path: '/home',
        component: () => import('@/views/home'),
        meta: {
            title: '首页'
        }
    }
];
