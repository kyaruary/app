export const profile = {
    path: '/profile',
    component: () => import('../views/profile/index.vue'),
    redirect: '/profile/home',
    children: [{
        path: 'home',
        component: () => import('../views/profile/home.vue')
    }, {
        path: 'info',
        component: () => import('../views/profile/info.vue')
    }]
};