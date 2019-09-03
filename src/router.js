import VueRouter from 'vue-router'
import HomeContainter from './components/tabbar/HomeContainter.vue'
import MemberContainter from './components/tabbar/MemberContainter.vue'
import SearchContainter from './components/tabbar/SearchContainter.vue'
import ShopContainter from './components/tabbar/ShopContainter.vue'

var router = new VueRouter({
  routes:[
    {path:'/home',component:HomeContainter},
    {path:'/member',component:MemberContainter},
    {path:'/shopcar',component:ShopContainter},
    {path:'/search',component:SearchContainter},
  ],
  linkActiveClass:'mui-active'
})
//把路由对象暴露出去
export default router