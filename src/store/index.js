import Vue from 'vue'
import Vuex from 'vuex'
import other from './other'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    other
  }
})
