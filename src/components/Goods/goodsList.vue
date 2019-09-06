<template >
  <div class="goods-list">
    <div class="goods-item">
      <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568385590&di=21b3913c36c1daa943cb64362fb2b7cd&imgtype=jpg&er=1&src=http%3A%2F%2Fi5.hexun.com%2F2017-10-28%2F191415124.jpg" alt="">
      <h1 class="title">小米（Mi）小米Note 16G双网通版</h1>
      <div class="info">
        <p class="price">
          <span class="now">￥899</span>
          <span class="old">￥999</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩60件</span>
        </p>
      </div>
    </div>
 <div class="goods-item">
      <img src="http://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f515ab05232ed14ccd78ec67e024495a.png?thumb=1&w=160&h=110" alt="">
      <h1 class="title">小米（Mi）小米Note 16G双网通版</h1>
      <div class="info">
        <p class="price">
          <span class="now">￥899</span>
          <span class="old">￥999</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩60件</span>
        </p>
      </div>
    </div>
 <div class="goods-item">
      <img src="http://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f515ab05232ed14ccd78ec67e024495a.png?thumb=1&w=160&h=110" alt="">
      <h1 class="title">小米（Mi）小米Note 16G双网通版</h1>
      <div class="info">
        <p class="price">
          <span class="now">￥899</span>
          <span class="old">￥999</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩60件</span>
        </p>
      </div>
    </div>

  </div>
</template>
<script>
export default {
  
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