<template>
  <div class="goodsdesc-content">
    <h3>{{goodsDesc.title}}</h3>
    <hr>
    <div class="content" v-html="goodsDesc.content"></div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      id:this.$route.params.id,
      goodsDesc:{}
    }
  },
  created(){
    this.getGoodsDesc()
  },
  methods:{
     getGoodsDesc() {
      this.$http.get("api/goods/getdesc/" + this.id).then(result => {
        if (result.body.status === 0) {
          //  console.log(result.body)

          this.goodsDesc = result.body.message[0];
        } else {
          Toast("加载失败");
        }
      });
    },
  }
}
</script>
<style lang="scss" scoped>
.goodsdesc-content{
  padding: 4px;
  h3{
    font-size: 16px;
    color:#226aff;
    text-align: center;
    margin: 15px 0;
  }
  .content{
    img{
      width: 100%;
      margin:0;
    }
    
  }
 
}
 
</style>