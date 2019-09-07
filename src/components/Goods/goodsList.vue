<template >
  <div class="goods-list">
    <div class="goods-item" v-for="item in goodslist" 
    :key="item.id" @click="goDetail(item.id)">
      <img :src="item.img_url" alt="图片丢失">
      <h1 class="title">{{item.title}}</h1>
      <div class="info">
        <p class="price">
          <span class="now">￥{{item.sell_price}}</span>
          <span class="old">￥{{item.market_price}}</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩{{item.stock_quantity}}件</span>
        </p>
      </div>
    </div>
    <mt-button type="danger" size="large" plain @click="getMoreGoods">加载更多</mt-button>

    </div>
</template>
<script>
import { Toast } from "mint-ui";

export default {
  data(){
    return {
      pageIndex:1,
      goodslist:[]
    }
  },
  created(){
    this.getGoods()
  },
  methods: {
    getGoods(){
      this.$http.get('api/getgoods?pageindex='+this.pageIndex).then(result=>{
        if(result.body.status===0){
          this.goodslist=this.goodslist.concat(result.body.message);
            // console.log(result.body);

        }else{
            Toast("商品加载失败");

        }
      })
    },
    getMoreGoods(){
      this.pageIndex++
      this.getGoods();
    },
    goDetail(id){
      //编程式路由跳转
      // this.$router.push('/home/goodsInfo/'+id)
      // this.$router.push({path:'/home/goodsInfo/'+id})
      this.$router.push({name:'goodsInfo',params:{id}})
    }
  }
}
</script>
<style lang="scss" scoped>
.goods-list{
  padding:7px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .goods-item{
    margin: 4px 0;
    width: 49%;
    border: 1px solid #ccc;
    box-shadow:  0 0 8px #ccc;
    padding: 2px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 293px;
    img{
      width: 100%;
    }
    .title{
      font-size: 14px;
    }
    .info{
      background-color: #eee;
      p{
        margin: 0;
        padding: 5px;
      }
      .price{

        .now{
          color: red;
          font-weight: bold;
          font-size: 16px;
        }
        .old{
          text-decoration: line-through;
          margin-left: 10px;
          font-size: 12px;
        }
      }
      .sell{
        font-size: 12px;
        display: flex;
        justify-content: space-between;
      }
    }
  }
}
</style>