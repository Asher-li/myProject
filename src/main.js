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
//引入vuex
import Vuex from 'vuex'
Vue.use(Vuex)
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
//初始化vuex
//每次进入网站将本地数据取出来放入car
var car=JSON.parse(localStorage.getItem('car')||'[]')
const store = new Vuex.Store({
  state: {
    car:car
  // { id:商品的id, count: 要购买的数量, price: 商品的单价，selected: false  }

  },
  mutations: {
    addToShoppingCart(state,goodsinfo){
      var flag=false
      state.car.some(item=>{//如果car里面已经有该商品则数量加
        if(item.id==goodsinfo.id){
          item.count+=parseInt(goodsinfo.count)
          flag=true
          return true
        }
      })
      if(flag===false){//car里面没有则加到car里面
        state.car.push(goodsinfo)
      }
      //将car存储到本地 localStorage 中保存
      localStorage.setItem('car',JSON.stringify(state.car))
    },
    //在购物车修改商品数量的更新
    updateGoodsInfo(state,update){
      state.car.some(item=>{
        if(item.id==update.id){
          item.count=parseInt(update.count)
          return true
        }
      })
      localStorage.setItem('car',JSON.stringify(state.car))

    },
    removeShopCar(state,id){
      state.car.some((item,i)=>{  
        if( item.id==id){
          state.car.splice(i,1)
          return true;
        }
      })
      localStorage.setItem('car',JSON.stringify(state.car))

    },
    updateGoodsSelected(state,info){
      state.car.some(item=>{
        if(item.id==info.id){
          item.selected=info.selected
        }
      })
      localStorage.setItem('car',JSON.stringify(state.car))

    }
  },
  getters:{
    getAllCounts(state){
      var c=0
      state.car.forEach(item=>{
        c+=item.count
      })
      return c
    },
    getGoodsCount(state){
      var o={}//{88:ture,89:false}
      state.car.forEach(item=>{
        o[item.id]=item.count
      })
      return o
    },
    getSelected(state){
      var o={}
      state.car.forEach(item=>{
        o[item.id]=item.selected
      })
      return o
    },
    getGoodsCountAndAmount(state){
      var o={
        count:0,
        amount:0
      }
      state.car.forEach(item=>{
        if(item.selected){
          o.count+=item.count
          o.amount+=item.price*item.count
        }
      })
      return o
    }
  }
})
var vm=new Vue({
  el:'#app',
  render:c=>c(app),
  router,
  store
})
