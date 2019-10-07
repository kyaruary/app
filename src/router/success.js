export const success = {
    path: '/success',
    component: () => import('../views/success/index.vue'),
    children: [{
        path: 'inject',
        component: () => import('../views/success/injectSuccess.vue'),
        props: (route) => ({ ph: route.query.ph })
    }, {
        path: 'release',
        component: () => import('../views/success/releaseSuccess.vue'),
        props: (route) => ({ ph: route.query.ph })
    }]
};