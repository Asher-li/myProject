<template>
  <div>
    <div id="slider" class="mui-slider">
      <div
        id="sliderSegmentedControl"
        class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"
      >
        <div class="mui-scroll">
          <a :class="['mui-control-item',item.id==0?'mui-active':'']" v-for="item in photoCate" 
          :key="item.id" @click="getPhotoImg(item.id)">{{item.title}}</a>
        </div>
      </div>
    </div>
    <ul class="photo-list">
  <router-link v-for="item in photoImg" 
   :to="'/home/photoInfo/'+item.id" :key="item.id" 
  tag="li">
    <img v-lazy="item.img_url">
    <div class="info">
      <h1 class="info-title">{{item.title}}</h1>
      <div class="info-body">{{item.zhaiyao}}</div>
    </div>
  </router-link>
  
     </ul>
  </div>
</template>
<script>
import mui from '../../../lib/mui/js/mui.min.js'
import { Toast } from "mint-ui";

export default {
  data(){
    return{
      photoCate:[],
      photoImg:[]
    }
  },
mounted(){// 当 组件中的DOM结构被渲染好并放到页面中后，会执行这个 钩子函数
    // 如果要操作元素了，最好在 mounted 里面，因为，这里时候的 DOM 元素 是最新的
 mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });

},
created(){
 this.getCategory();
 this.getPhotoImg(0)
},
  methods: {
    getCategory(){
      this.$http.get('api/getimgcategory').then(result=>{
        if(result.body.status===0){
          result.body.message.unshift({title:"全部",id:0});
          this.photoCate=result.body.message;
          //  console.log(result.body)
        }else{
           Toast("图片加载失败");

        }
      })
    },
    getPhotoImg(cateid){
       this.$http.get('api/getimages/'+cateid).then(result=>{
        if(result.body.status===0){
        
          this.photoImg=result.body.message;
          //  console.log(result.body)
        }else{
           Toast("图片加载失败");

        }
      })
    }
  },
};
</script>
<style lang="scss" scoped>
*{
  touch-action: pan-y;
}

.photo-list{
  list-style: none;
  margin: 0;
  padding: 10px;
  padding-bottom: 0px;
  li{
    background-color: #ccc;
    text-align: center;
    margin-bottom: 10px;
    box-shadow: 0 0 9px #999;
    position: relative;
    img{
      width:100%;
      vertical-align:middle;
    }
    img[lazy=loading] {
  width: 40px;
  height: 300px;
  margin: auto;
}
  }
  .info{
    color:white;
    text-align: left;
    position: absolute;
    bottom: 0;
    background-color: rgba(0,0,0,0.4);
    max-height: 84px;
    .info-title{
      font-size: 14px;
    }
    .info-body{
      font-size: 12px;
    }
  }
}

</style>