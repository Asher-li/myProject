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
Vue.http.options.root='http://www.liulongbin.top:3005'
//全局配置post请求表单数据格式组织形式
Vue.http.options.emulateJSON=true;
//引入vue
import Vue from 'vue'
import app from './App.vue'
//Mint-ui组件
// import {Header} from 'mint-ui'//头部悬浮条
// Vue.component(Header.name, Header);
// import { Swipe, SwipeItem } from 'mint-ui';//首页轮播图
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
// import { Button } from 'mint-ui'//按钮
// Vue.component(Button.name, Button);
import MintUI from 'mint-ui'//全部引入
import 'mint-ui/lib/style.css'
Vue.use(MintUI)
//mui组件
import '../lib/mui/css/mui.min.css'
import '../lib/mui/css/icons-extra.css'
//全局过滤器修改时间
//引入moment插件修改时间
import moment from 'moment'
Vue.filter('dataFormat',function(datastr,pattern="YYYY-MM-DD HH:mm:ss"){
  return moment(datastr).format(pattern)
})
//引入缩略图插件vue-preview
import VuePreview from 'vue-preview'
Vue.use(VuePreview)

var vm=new Vue({
  el:'#app',
  render:c=>c(app),
  router
})