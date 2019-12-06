import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import  home from './module/home/home'
const store  = new Vuex.Store({
  modules:{
    home
  }
})
export default  store