<template>
  <div class="goodsList">
    <transition
    @before-enter="beforeEnter"
    @enter="Enter"
    @after-enter="afterEnter"
    >
    <div class="ball" v-show="ballFlag" ref="ball"></div>
    
    </transition>
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <swiper :lunbotuList="lunbotuList" :isfull="false"></swiper>
        </div>
      </div>
    </div>

    <div class="mui-card">
      <div class="mui-card-header">{{goodsinfo.title}}</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p class="price">
            市场价：
            <del>￥{{goodsinfo.market_price}}</del>&nbsp;&nbsp;销售价：
            <span class="now_price">￥{{goodsinfo.sell_price}}</span>
          </p>
          <p>
            购买数量：
            <numberbox @counts="countsChenged" :max="goodsinfo.stock_quantity"></numberbox>
          </p>
          <p>
            <mt-button type="primary" size="small" >立即购买</mt-button>
            <mt-button type="danger" size="small" @click="addToShopCar">加入购物车</mt-button>
          </p>
        </div>
      </div>
    </div>
    <div class="mui-card">
      <div class="mui-card-header">商品参数</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>商品货号：{{goodsinfo.goods_no}}</p>
          <p>库存情况：{{goodsinfo.stock_quantity}}件</p>
          <p>上架时间：{{goodsinfo.add_time|dataFormat}}</p>
        </div>
      </div>
      <div class="mui-card-footer">
        <mt-button type="primary" size="large" plain @click="goDesc(id)">图文介绍</mt-button>
        <mt-button type="danger" size="large" plain @click="goComment(id)">商品评论</mt-button>
      </div>
    </div>
  </div>
</template>
<script>
import { Toast } from "mint-ui";
import swiper from "../subcomments/swiper.vue";
import numberbox from "../subcomments/numberBox.vue";
export default {
  data() {
    return {
      id: this.$route.params.id,
      lunbotuList: [],
      goodsinfo: {},//商品信息
      ballFlag:false,
      purchaseQuantity:1//用户选中的商品数量
    };
  },
  created() {
    this.getlunbotu(), this.getGoodsInfo();
  },
  methods: {
    getlunbotu() {
      this.$http.get("api/getthumimages/" + this.id).then(result => {
        if (result.body.status === 0) {
          //  console.log(result.body)
          result.body.message.forEach(item => {
            item.img_url = item.src;
          });
          this.lunbotuList = result.body.message;
        } else {
          Toast("轮播图加载失败");
        }
      });
    },
    getGoodsInfo() {
      this.$http.get("api/goods/getinfo/" + this.id).then(result => {
        if (result.body.status === 0) {
          //  console.log(result.body)

          this.goodsinfo = result.body.message[0];
        } else {
          Toast("商品加载失败");
        }
      });
    },
    goDesc(id){//编程式路由跳图文介绍
        this.$router.push({name:'goodsDesc',params:{id}})
    },
    goComment(id){//评论页面
        this.$router.push({name:'goodsComment',params:{id}})

    },
    addToShopCar(){
      this.ballFlag=!this.ballFlag
      var goodsinfo={
        id:this.id,
        count:this.purchaseQuantity,
        price:this.goodsinfo.sell_price,
        selected:true
      }
      //将goodsinfo数据通过vuex的方法传入vuex的car中
      this.$store.commit('addToShoppingCart',goodsinfo)
    },
    beforeEnter(el){
      el.style.transform='translate(0,0)'
    },
    Enter(el,done){
      el.offsetWidth
      const ballPosition=this.$refs.ball.getBoundingClientRect();
      const NumberPosition=document.getElementById("ballNumber").getBoundingClientRect();
      const xDist=NumberPosition.left-ballPosition.left;
      const yDist=NumberPosition.top-ballPosition.top;
      el.style.transform=`translate(${xDist}px,${yDist}px)`;
      el.style.transition="all 0.5s cubic-bezier(.55,-0.14,1,.52)  "
      done()
    },
    afterEnter(el){
      
      this.ballFlag=!this.ballFlag
    },
    countsChenged(data){
      this.purchaseQuantity=data
      // console.log(this.purchaseQuantity)
    }
  },

  components: {
    swiper,
    numberbox
  }
};
</script>
<style lang="scss" scoped>
.goodsList {
  background-color: #eee;
  overflow: hidden;
  .now_price {
    color: red;
    font-size: 16px;
    font-weight: bold;
  }
  .mui-card-footer {
    display: block;
    button {
      margin: 15px 0;
    }
  }
  .ball{
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: red;
    position: absolute;
    z-index: 9;
    top:390px;
    left:146px ;
  }
}
</style>