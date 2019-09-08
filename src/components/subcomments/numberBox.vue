<template>
  <div class="mui-numbox" data-numbox-min="1" :data-numbox-max="max">
    <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
    <input id="test" class="mui-input-numbox" type="number" value="1"
     @change="countsChenge" ref="numbers"/>
    <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
  </div>
</template>
<script>
import mui from '../../../lib/mui/js/mui.min.js'
export default {
  mounted(){
    //初始化数字选择框
    mui('.mui-numbox').numbox()
    
  },
  methods:{
    countsChenge(){
      this.$emit('counts',parseInt(this.$refs.numbers.value))
    }
  },
  props:['max'],
  watch:{
    max:function(nweVal,oldVal){
      mui('.mui-numbox').numbox().setOption('max',nweVal);
    }
  }
};
</script>
<style lang="scss" scoped>
</style>