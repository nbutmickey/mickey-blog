<template>
<div>
  <div class="index-main-container">
    <section class="grid_container"  style="padding-top: 30px;">
      <article class="row" v-for="(item,i) in articles.dataList" :key="i" style="overflow: hidden;cursor: pointer">
        <header class="col-md-8 col-sm-12" style="vertical-align: middle">
          <h2 style="color: #333;font-size: 26px;line-height: 1.5;"><router-link :to="{name:'articles',params:{id:item.postId}}">{{item.title}}</router-link></h2>
          <div style="padding: 10px 0;letter-spacing: 1px;font-size: 16px;line-height: 1.625;color: #555;">{{item.desc}}</div>
          <span style="color: #888;font-size: 12px">{{time(item.date)}} 发布 | {{parseInt(item.readNum)}}人阅览</span>
        </header>
        <div class="col-md-4 col-sm-12" style="height: 180px;vertical-align: middle;">
          <div :style="{backgroundImage:'url('+item.imgSrc+')'}" style="height: 100%;background-size: cover;background-position: 50%;border-radius: 3px;box-shadow:0 2px 5px rgba(0, 0, 25, 0.1), 0 5px 75px 1px rgba(0, 0, 50, 0.2) "></div>
        </div>
      </article>
    </section>
  </div>
  <v-pagination :total="total" :current-page="pageNow" @pageChange="getArticles"></v-pagination>
</div>
</template>

<script type="es6">
  import paginaion from './common/pagination'
  import {formatTime} from '../util/formDate'
    export default {
      name: "index",
      components:{
        'v-pagination':paginaion
      },
        data(){
          return {
            articles:[],
            total:0,
            pageSize:8,
            pageNow:1,
            backgroundImage:require('../assets/iphone-7.jpg')
          }
        },
      mounted(){
          if(sessionStorage.getItem('pageNow')){
            this.pageNow=sessionStorage.getItem('pageNow')
          }
           this.getArticles(this.pageNow);
      },
      methods:{
          getArticles:function (pageNum) {
              this.$http.get('/api/getAllArticles',{params:{
                pageSize:8,
                pageNum:pageNum
                }}).then(res=>{
                this.articles = res.data;
                this.pageNow = res.data.pageNum;
                this.total=res.data.total;
                this.pageNum=res.data.pageNum;
              });
          },
          time:function (times) {
            return formatTime(times,'yyyy-mm-dd');
           }
      }
    }
</script>

<style scoped>
  @import "../style/responsive.css";
  .article:nth-child(odd) {
    animation: left 0.5s 0.5s linear;
    animation-fill-mode: both;
    position: relative;
    opacity: 0;
    left: -35px;
  }
  .article:nth-child(even) {
    animation: right 0.5s 0.5s linear;
    animation-fill-mode: both;
    position: relative;
    opacity: 0;
    right: -35px;
  }
  .article-title{
    display: inline-block;
    color: #333;
    font-size: 26px;
    padding: 10px 15px 5px;
  }
  .article-expand{
    display: inline-block;
  }
  .article-desc{
    padding: 10px 15px 15px;
    word-break: break-word;
    color: #555;
    font-family: Roboto Slab,PingFang SC,Microsoft YaHei,sans-serif;
  }
  .time{
    color: #00a7e0;
  }
  .tags{
    color: #D6D00B;
  }
  .count{
    color: #ff3f1a;
  }
  .article-meta{
    padding:10px 15px 0;
    font-size: 12px
  }

  .article{
    border-radius: 5px;
    box-shadow:3px 5px 5px #1b1f23;
    background: #FFF;
    margin-bottom: 20px;
    cursor: pointer;
  }
  .index-main-container{
    width: 700px;
    margin:0 auto 20px;
  }
  @media screen and (max-width: 768px){
    .index-main-container{
      width: 94%;
    }
  }
</style>
