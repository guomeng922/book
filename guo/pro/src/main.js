// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store/store'
import router from './router'
import axios from './base/axios'
import './style/reset.css'

import '../static/mui/css/mui.css'

Vue.config.productionTip = false
Vue.prototype.$axios=axios
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
