<template >
  <div>
    <mt-swipe :auto="4000">
      <!-- lunbotuList应该是父组件向子组件传值 -->
      <mt-swipe-item v-for="item in lunbotuList" :key="item.id">
        <img :src="item.img_url" :class="{'full':isfull}" />
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>
<script>
export default {
  props:['lunbotuList','isfull']
}
</script>
<style lang="scss" scoped>
.mint-swipe {
  height: 200px;
text-align: center;
  // .mint-swipe-item:nth-child(1) {
  //   background-color: red;
  // }
  // .mint-swipe-item:nth-child(2) {
  //   background-color: darkcyan;
  // }
  // .mint-swipe-item:nth-child(3) {
  //   background-color: chartreuse;
  // }
  img {
    // width: 100%;
    height: 100%;
  }
}
.full{
  width: 100%
}
</style>