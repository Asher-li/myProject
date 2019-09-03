<template>
<div>
  <!-- <h3>首页组件</h3> -->
  <!-- 轮播图 -->
  <mt-swipe :auto="4000">
  <mt-swipe-item v-for="item in lunbotuList" :key="item.id">
    <img :src="item.img_url" alt="">
  </mt-swipe-item>
 
</mt-swipe>
</div>
</template>
<script>
import {Toast} from 'mint-ui'
export default {
  data(){
    return{
      lunbotuList:[]//保存轮播图
    }
  },
  created(){
    this.getLunbotu()
  },
  methods:{
    getLunbotu(){
      this.$http.get('http://www.liulongbin.top:3005/api/getnewslist').then(result=>{
        if(result.body.status===0){
          this.lunbotuList=result.body.message;
           console.log(result.body)
        }else{
         Toast('加载轮播图失败')
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
  .mint-swipe{
    height: 200px;

    .mint-swipe-item:nth-child(1){
      background-color: red;
    }
     .mint-swipe-item:nth-child(2){
      background-color:darkcyan;
    }
     .mint-swipe-item:nth-child(3){
      background-color:chartreuse;
    }
    img{
      width: 100%;
      height: 100%;
    }
  }
</style>