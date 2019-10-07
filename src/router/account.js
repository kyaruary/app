export const account = {
    path: 'account',
    name: 'account',
    component: () => import('../views/account/index.vue'),
    children: [
        {
            path: 'game',
            component: () => import('../views/account/gameAccount/index.vue'),
            children: [{
                path: 'record',
                component: () => import('../views/account/gameAccount/phRecord.vue')
            }, {
                path: 'inject',
                component: () => import('../views/account/gameAccount/phInject.vue')
            }, {
                path: 'releasetime',
                component: () => import('../views/account/gameAccount/releaseTime.vue')
            }, {
                path: 'releasenext/:name',
                component: () => import('../views/account/gameAccount/releaseNext.vue'),
                props: (route) => ({ name: route.params.name, level: route.query.level })
            }, {
                path: 'rule',
                component: () => import('../views/account/gameAccount/phRule.vue')
            },
            {
                path: 'releaseph',
                component: () => import('../views/account/gameAccount/releasePh.vue')
            }, {
                path: '',
                component: () => import('../views/account/gameAccount/gameAccount.vue')
            },]
        }, {
            path: 'bcoin',
            component: () => import('../views/account/bcoinAccount/index.vue'),
            children: [{
                path: '',
                component: () => import('../views/account/bcoinAccount/bcoinAccount.vue')
            }, {
                path: 'recharge',
                component: () => import('../views/account/bcoinAccount/recharge.vue')
            }, {
                path: 'rechargerecord',
                component: () => import('../views/account/bcoinAccount/rechargeRecord.vue')
            }]
        }, {
            path: 'exchange',
            component: () => import('../views/account/exchangeAccount.vue')
        },]
};