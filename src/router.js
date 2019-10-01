import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home'
Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [{
    path: '/',
    name: 'home',
    component: Home
  }, {
    path: '/login',
    name: 'login',
    component: () => import('./views/login/login.vue')
  }, {
    path: '/secret',
    name: 'secret',
    component: () => import('./views/secret/getSecret.vue')
  }, {
    path: '/profile',
    component: () => import('./views/profile/index.vue'),
    redirect: '/profile/home',
    children: [{
      path: 'home',
      component: () => import('./views/profile/home.vue')
    }, {
      path: 'info',
      component: () => import('./views/profile/info.vue')
    }]
  }, {
    path: '/account',
    name: 'account',
    component: () => import('./views/account/index.vue'),
    children: [{
      path: 'game',
      component: () => import('./views/account/gameAccount/index.vue'),
      children: [{
        path: 'record',
        component: () => import('./views/account/gameAccount/phRecord.vue')
      }, {
        path: '',
        component: () => import('./views/account/gameAccount/gameAccount.vue')
      }]
    }, {
      path: 'bcoin',
      component: () => import('./views/account/bcoinAccount/bcoinAccount.vue')
    }]
  }, {
    path: '*',
    redirect: '/'
  }]
})
