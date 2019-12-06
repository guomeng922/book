import Vue from 'vue'
import Router from 'vue-router'

import Home from  './pages/Home'
import Success from  './pages/Success'
import Product from  './pages/Product'
import My from  './pages/My'
import Service from './components/service'

Vue.use(Router)


export default new Router({
  routes: [
    { path:'/home',component:Home},
    { path:'/success',component:Success,
    //   children:[
    //     {path:':id',component:Detail}
    //   ]
    },
    { path:'/product',component:Product},
    { 
      path:'/my',
      component:My,
      children:[
        {path:'/service',component:Service}
      ]
    },
    { path:'/',redirect:'/home'}
  ]

})