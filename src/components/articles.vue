<template>
  <div class="index">
  <div class="main-inner">
        <div class="comment-body markdown-body" v-html="detail" ></div>
  </div>
  </div>
</template>

<script>
  //markdown的修改
  let hljs = require('highlight.js');
  let mark = require('markdown-it-mark');
  let container=require('markdown-it-container');
  let sub=require('markdown-it-sub');
  let sup=require('markdown-it-sup');
  let deflist=require('markdown-it-deflist');
  let emoji = require('markdown-it-emoji');
  let insert = require('markdown-it-ins');
  let taskList=require('markdown-it-task-lists');
  let md = require('markdown-it')(
    {
      highlight: function (str, lang) {
        if (lang && hljs.getLanguage(lang)) {
          try {
            return '<pre class="hljs"><code>' +
              hljs.highlight(lang, str, true).value +
              '</code></pre>';
          } catch (__) {}
        }

        return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>';
      },
      breaks: true,
    }
  )
    .use(mark)
    .use(insert)
    .use(sub)
    .use(sup)
    .use(emoji)
    .use(deflist)
    .use(taskList)
    .use(container,'hljs-center')
    .use(container, 'hljs-left')
    .use(container, 'hljs-right');

  export default {
        name: "articles",
        data(){
          return{
            detail:{}
          }
        },
        mounted(){
          this.getArticleDetail();
          this.readNumIncrease();
        },
       methods:{
          readNumIncrease:function(){
            this.$http.post('/api/readNumIncrease',{params:{
              postId:this.$route.params.id,
              }}).then(res=>{
                console.log(this.$route.params.id);
            });
          },
          getArticleDetail:function () {
            this.$http.get('/api/getArticleDetails',{params:{
                postId:this.$route.params.id,
              }}).then(res=>{
              this.detail=md.render(res.data.detail);
            })
          }
       }
    }
</script>

<style scoped>
  .main-inner{
    width: 700px;
    height: auto;
    padding-top: 20px;
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
    overflow: auto;
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
