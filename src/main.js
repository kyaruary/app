import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Mint from 'mint-ui'
import VueClipBoard from 'vue-clipboard2'
import VueCorvova from 'vue-cordova'
import 'normalize.css'
import './assets/less/global.less'
import 'mint-ui/lib/style.css'
Vue.config.productionTip = false
Vue.use(Mint);
Vue.use(VueClipBoard);
Vue.use(VueCorvova)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
