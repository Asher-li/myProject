<template>
  <div class="cmt-container">
    <h3>发表评论</h3>
    <hr>
    <textarea placeholder="请输入要评价的内容，最多不要超过200字"
    maxlength="120">

    </textarea>
    <mt-button type="primary" size="large">发表评论</mt-button>
    <div class="cmt-list">
      <div class="cmt-item">
      <div class="cmt-title">
        第1楼&nbsp;&nbsp;用户：匿名用户&nbsp;&nbsp;发表时间：20190202
      </div>
      <div class="cmt-body">
        啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊
      </div>
      </div>
    </div>
    <mt-button type="danger" size="large" plain>加载更多</mt-button>

  </div>
</template>
<script>

</script>
<style lang="scss" scoped>
.cmt-container{
  h3{
    font-size: 18px;
  }
  textarea{
    font-size: 14px;
    height: 85px;
    margin:0;
  }
  .cmt-list{
    margin: 10px 0;
    .cmt-item{
      font-size: 13px;
      .cmt-title{
        line-height: 30px;

        background-color:#ebe5e5;
      }
      .cmt-body{
        font-size: 16px;
          line-height: 35px;
          text-indent: 2em;
      }
    }
  }
}
</style>