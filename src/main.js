//入口文件
console.log('ok')
//路由包导入
import VueRouter from 'vue-router'
//安装路由
Vue.use(VueRouter)

import router from './router.js'
//vue-resource导入安装
import VueResource from 'vue-resource'
Vue.use(VueResource)
import Vue from 'vue'
import app from './App.vue'
//Mint-ui组件
import {Header} from 'mint-ui'
import '../lib/mui/css/mui.min.css'
import '../lib/mui/css/icons-extra.css'
import { Swipe, SwipeItem } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

Vue.component(Header.name, Header);
var vm=new Vue({
  el:'#app',
  render:c=>c(app),
  router
})