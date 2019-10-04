import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Mint from 'mint-ui'
import VueClipBoard from 'vue-clipboard2'
import VueCorvova from 'vue-cordova'
import { VueHammer } from 'vue2-hammer'
import 'normalize.css'
import 'mint-ui/lib/style.css'
import './assets/global.css';
Vue.config.productionTip = false
Vue.use(Mint);
Vue.use(VueClipBoard);
Vue.use(VueCorvova);
Vue.use(VueHammer);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
