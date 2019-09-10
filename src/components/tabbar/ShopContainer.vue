<template>
<div class="shopcar-container">
    <div class="goods-List" >
      <div class="mui-card" v-for="item in goodsList" :key="item.id">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<mt-switch></mt-switch>
            <img :src="item.thumb_path" alt="">
            <div class="info">
              <h1>{{item.title}}</h1>
              <p>
                <span class="price">￥{{item.sell_price}}</span>
                <numbox :initcount="$store.getters.getGoodsCount[item.id]"
                :goodsid="item.id"></numbox>
                <a href="javascript:;">删除</a>
              </p>
            </div>
					</div>
				</div>
			</div>
    </div>
    <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						这是一个最简单的卡片视图控件；卡片视图常用来显示完整独立的一段信息，比如一篇文章的预览图、作者信息、点赞数量等
					</div>
				</div>
			</div>
</div>
</template>
<script>
import numbox from '../subcomments/shopNumberBox.vue'
export default {
  
  data(){
    return{
      goodsList:[]
    }
  },
  created(){
      this.getGoodsList()
  },
  methods:{
    getGoodsList(){
      var idArr=[]
       this.$store.state.car.forEach(item=>{
         idArr.push(item.id)})
       //购物车中没有商品的话就不用请求接口数据
       if(idArr.length<=0){
         return;
       }
      this.$http
        .get("api/goods/getshopcarlist/"+idArr.join(","))
        .then(result => {
          if (result.body.status === 0) {
            this.goodsList = result.body.message;
            // console.log(result.body);
          }
        });
    }
  },
  components:{
    numbox
  },
  
}
</script>
<style lang="scss" scoped>
  .shopcar-container{
    background-color: #eee;
    overflow: hidden;
    .goods-List{
      .mui-card-content-inner{
        display: flex;
        align-items: center;
      }
      img{
        width: 60px;
        height: 60px;
      
      }
      h1{
        font-size: 13px;
      }
      .info{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .price{
          color: red;
          font-weight: bold;
        }
      }
    }
  }
</style>