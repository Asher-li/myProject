<template>
  <div>
    <!-- <h3>首页组件</h3> -->
    <!-- 轮播图 -->
    <swiper :lunbotuList='lunbotuList' :isfull='true'></swiper>
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/newsList">
          <img src="../../images/menu1(1).png" alt="">
          <div class="mui-media-body">新闻资讯</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/photos">
          <img src="../../images/menu2.png" alt="">
          <div class="mui-media-body">图片分享</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/goodsList">
          <img src="../../images/menu3.png" alt="">         
          <div class="mui-media-body">商品购买</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../images/menu4.png" alt="">
         
          <div class="mui-media-body">留言反馈</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../images/menu5.png" alt="">
         
          <div class="mui-media-body">视频专区</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../images/menu6.png" alt="">
         
          <div class="mui-media-body">联系我们</div>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
import { Toast } from "mint-ui";
import swiper from '../subcomments/swiper.vue'
export default {
  data() {
    return {
      lunbotuList: [] //保存轮播图
    };
  },
  created() {
    this.getLunbotu();
  },
  methods: {
    getLunbotu() {
      this.$http
        .get("api/getnewslist")
        .then(result => {
          if (result.body.status === 0) {
            this.lunbotuList = result.body.message;
            // console.log(result.body);
          } else {
            Toast("加载轮播图失败");
          }
        });
    }
  },
  components:{
    swiper
  }
};
</script>
<style lang="scss" scoped>

.mui-grid-view.mui-grid-9{
  background-color: rgb(255, 255, 255);
  border: none;
  img{
    width: 60px ;
    height: 60px;
  }
  .mui-media-body{
    font-size: 13px;
  }
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell{
  border: none;
}
</style>