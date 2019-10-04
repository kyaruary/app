export const feedback = {
    path: '/feedback',
    component: () => import('../views/feedback/index.vue'),
    children: [{
        path: 'q',
        component: () => import('../views/feedback/feedback.vue')
    }, {
        path: 'list',
        component: () => import('../views/feedback/feedbackList.vue')
    }]
}