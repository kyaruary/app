import Vue from 'vue'
import Router from 'vue-router'
import { home, login, secret } from './root';
// import { account } from './account'
import { profile } from './profile'
import { password } from './password';
import { success } from './success';
import { feedback } from './feedback';
Vue.use(Router)

const router = new Router({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes: [home, login, profile, secret, password, success, feedback, { path: '*', redirect: '/' }]
})

router.beforeEach((to, from, next) => {
    const token = window.localStorage.getItem('authToken');
    if (token) {
        if (to.path === '/login') {
            next('/')
        } else {
            next();
        }
    } else {
        if (to.matched[0].meta.auth) {
            next('/login')
        } else {
            next();
        }
    }
})
export default router;
