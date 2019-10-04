export const password = {
    path: '/password',
    component: () => import('../views/password/index.vue'),
    children: [{
        path: 'set',
        component: () => import('../views/password/setPassword.vue')
    }, {
        path: 'reset',
        component: () => import('../views/password/resetPassword.vue')
    }]
}