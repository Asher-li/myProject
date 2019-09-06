<template>
  <div class="photoInfo-container">
    <h1>{{photoInfo.title}}</h1>
    <p class="subtitle">
      <span>发表时间：{{photoInfo.add_time|dataFormat}}</span>
      <span>点击：{{photoInfo.click}}次</span>
    </p>
    <hr />

    <div class="thumbs">
      <vue-preview :slides="list" class="imgPrev"></vue-preview>
    </div>

    <div class="content" v-html="photoInfo.content"></div>
    <cmt-box :id="id"></cmt-box>
  </div>
</template>
<script>
import comment from "../subcomments/comment.vue";
import { Toast } from "mint-ui";

export default {
  data() {
    return {
      id: this.$route.params.id,
      photoInfo: {},
      list: []
    };
  },
  methods: {
    getPhotoInfo() {
      this.$http.get("api/getimageInfo/" + this.id).then(result => {
        if (result.body.status === 0) {
          //  console.log(result.body)
          this.photoInfo = result.body.message[0];
        } else {
          Toast("图片详情加载失败");
        }
      });
    },
    getPhotominInfo() {
      this.$http.get("api/getthumimages/" + this.id).then(result => {
        if (result.body.status === 0) {
          //循环每个图片数据,补全图片的宽和高
          result.body.message.forEach(item => {
            item.msrc = item.src;
            item.w = 600;
            item.h = 400;
          });
          this.list = result.body.message;
          console.log(this.list);
        } else {
          Toast("图片详情加载失败");
        }
      });
    }
  },
  created() {
    this.getPhotoInfo();
    this.getPhotominInfo();
  },
  components: {
    "cmt-box": comment
  }
};
</script>
<style lang="scss" scoped>
.photoInfo-container {
  padding: 3px;
  h1 {
    color: #26a2ff;
    font-size: 15px;
    text-align: center;
    margin: 15px 0;
  }
  .subtitle {
    display: flex;
    justify-content: space-between;
    font-size: 13px;
  }
  .content {
    font-size: 13px;
    line-height: 30px;
  }
  .thumbs {
    /deep/ .my-gallery {
      display: flex;
      flex-wrap: wrap;
      figure {
        width: 30%;
        margin: 5px;
        img {
          width: 100%;
        }
      }
    }
  }
}
</style>