import Vue from 'vue'
import Vuex from 'vuex'
import { user } from './user'
import { cmpstate } from './cmpstate'
import { bill } from './bill'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    cmpstate,
    bill
  }
})
