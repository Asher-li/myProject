import VueRouter from 'vue-router'
import HomeContainer from './components/tabbar/HomeContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'
import ShopContainer from './components/tabbar/ShopContainer.vue'
import NewsList from './components/news/NewsList.vue'
import NewsInfo from './components/news/NewsInfo.vue'
import PhotoList from './components/photos/photoList.vue'
import PhotoInfo from './components/photos/photoInfo.vue'
import GoodsList from './components/Goods/goodsList.vue'
import GoodsInfo from './components/Goods/goodsInfo.vue'
import GoodsDesc from './components/Goods/goodsDesc.vue'
import GoodsComment from './components/Goods/gooodscomment.vue'

var router = new VueRouter({
  routes:[
    {path:'/',redirect:'/home'},
    {path:'/home',component:HomeContainer},
    {path:'/member',component:MemberContainer},
    {path:'/shopcar',component:ShopContainer},
    {path:'/search',component:SearchContainer},
    {path:'/home/newsList',component:NewsList},
    {path:'/home/newsInfo/:id',component:NewsInfo},
    {path:'/home/photos',component:PhotoList},
    {path:'/home/photoInfo/:id',component:PhotoInfo},
    {path:'/home/goodsList',component:GoodsList},
    {path:'/home/goodsInfo/:id',component:GoodsInfo,name:'goodsInfo'},
    {path:'/home/goodsdesc/:id',component:GoodsDesc,name:'goodsDesc'},
    {path:'/home/goodscomment/:id',component:GoodsComment,name:'goodsComment'},
  ],
  linkActiveClass:'mui-active'
})
//把路由对象暴露出去
export default router