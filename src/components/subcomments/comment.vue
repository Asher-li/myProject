<template>
  <div class="cmt-container">
    <h3>发表评论</h3>
    <hr>
    <textarea placeholder="请输入要评论的内容，最多不要超过200字"
    maxlength="120" v-model="msg">

    </textarea>
    <mt-button type="primary" size="large" @click="postComments">发表评论</mt-button>
    <div class="cmt-list">
      <div class="cmt-item" v-for="(item,i) in comments" :key="i">
      <div class="cmt-title">
        <p>第{{i+1}}楼</p>
        <p>用户：{{item.user_name}}</p>
        <p>发表时间：{{item.add_time |dataFormat}}</p>
      </div>
      <div class="cmt-body">
        {{item.content==="undefined"?"该用户很懒，什么都没有评论":item.content}}
      </div>
      </div>
    </div>
    <mt-button type="danger" size="large" plain @click="getMoreComments">加载更多</mt-button>

  </div>
</template>
<script>
import { Toast } from "mint-ui";
export default {
  data(){
    return{
      pageIndex:1,
      comments:[],
      msg:''
    }
  },
  created(){
    this.getNewsComment()
  },
  methods :{
    getNewsComment(){
      this.$http.get("api/getcomments/"+this.id+"?pageindex="+this.pageIndex).then(
        result=>{
        if(result.body.status===0){
          //  console.log(result.body)
          this.comments=this.comments.concat(result.body.message)

        }else{
            Toast("评论加载失败");

        }
      })
    },
    getMoreComments(){
      this.pageIndex+1;
       this.getNewsComment();
    },
    postComments(){
      if(this.msg.trim().length===0){
        return Toast('评论内容不能为空！')
      }
      this.$http.post('api/postcomment/'+this.id,
      {content:this.msg}).then(result=>{
        if(result.body.status===0){
          var cmt={user_name:'匿名用户',
          add_time:Date.now(),
          content:this.msg.trim()}
        }else{
           Toast("评论加载失败");
        }
        this.comments.unshift(cmt);
        this.msg='';
      })
    }
  },
  props:['id']
}
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
        display:flex;
        justify-content: space-between;
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