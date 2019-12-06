// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
//引入轮播
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)
//引入echarts
import echarts from 'echarts'
// Vue.prototype.$echarts = echarts

// 引入 ECharts 主模块
// let echarts = require('echarts/lib/echarts');
// // 引入折线图/柱状图等组件
// require('echarts/lib/chart/line')
// require('echarts/lib/chart/pie')
// // 引入提示框和title组件，图例
// require('echarts/lib/component/tooltip')
// require('echarts/lib/component/title')
// require('echarts/lib/component/legend')
// require('echarts/lib/component/legendScroll')//图例滚动

//引入visualMap相对应的js文件
// import 'echarts/lib/component/visualMap'
//vue全局注入echarts
Vue.prototype.$echarts = echarts



import '../static/mui/css/mui.css'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
