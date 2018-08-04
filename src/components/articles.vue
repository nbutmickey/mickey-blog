<template>
<div>
  <div class="index">
  <div class="main-inner">
        <div class="comment-body markdown-body" v-html="detail.detail"></div>
  </div>
  </div>
</div>
</template>

<script>
    export default {
        name: "articles",
        data(){
          return{
            detail:{}
          }
        },
        mounted(){
          this.getArticleDetail();
        },
       methods:{
          getArticleDetail:function () {
            this.$http.get('/api/getArticleDetails',{params:{
                postId:this.$route.params.id,
              }}).then(res=>{
              this.detail=res.data;
            })
          }
       }
    }
</script>

<style scoped>
  .main-inner{
    width: 700px;
    height: auto;
    margin: 0 auto;
    min-width: 350px
  }
  @media screen and (max-width:768px) {
    .main-inner{
      width: 60%;
    }
  }
  .comment-body {
    width: 100%;
    padding: 15px;
    overflow: visible;
    font-size: 14px;
    color: #24292e;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial,
    sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  }
  .markdown-body blockquote {
    margin-left: 0;
  }
  a {
    color: #0366d6;
    text-decoration: none;
  }

</style>
