import index from '../views/home/index';
import Home from '../views/home/home';
import { account } from './account'
export const home = {
    path: '/',
    name: 'index',
    component: index,
    meta: {
        auth: true
    },
    children: [{
        path: "",
        component: Home
    }, account]
};

export const login = {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/login.vue')
};

export const secret = {
    path: '/secret',
    name: 'secret',
    component: () => import('../views/secret/getSecret.vue')
};
