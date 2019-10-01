import Vue from 'vue'
import Vuex from 'vuex'
import { user } from './user'
import { secret } from './secret'
import { cmpstate } from './cmpstate'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    secret,
    user,
    cmpstate
  }
})
