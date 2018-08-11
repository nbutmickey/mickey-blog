<template>
  <div>
  <div class="index-main-container">
    <section class="grid_container"  style="padding-top: 30px;">
      <article class="row article-item" v-for="(item,i) in articles.dataList" :key="i">
        <div class="col-md-4 col-sm-12 item-avator">
          <div :style="{backgroundImage:'url('+item.imgSrc+')'}"></div>
        </div>
        <header class="col-md-8 col-sm-12 item-header">
          <h2 class="item-title"><router-link :to="{name:'articles',params:{id:item.postId}}">{{item.title}}</router-link></h2>
          <div class="item-content">{{item.desc}}</div>
          <span class="item-meta">{{time(item.date)}} 发布 | {{parseInt(item.readNum)}}人阅览</span>
        </header>
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
  .article-item{
    overflow: hidden;
    cursor: pointer;
    padding-bottom: 20px;
    top: -50px;
    opacity: 0;
    animation: down 0.5s 0.5s linear;
    animation-fill-mode: both;
  }
  .item-avator{
    height: 180px;
    vertical-align: middle;
  }
  .item-avator div{
    height: 100%;
    background-size: cover;
    background-position: 50%;
    border-radius: 3px;
    box-shadow:0 2px 5px rgba(0, 0, 25, 0.1), 0 5px 75px 1px rgba(0, 0, 50, 0.2)
  }
  .index-main-container{
    width: 700px;
    margin:0 auto 20px;
  }
  .item-header{
    vertical-align: middle;
  }
  .item-title{
    color: #333;
    font-size: 26px;
    line-height: 1.5;
  }
  .item-content{
    padding: 10px 0;
    letter-spacing: 1px;
    font-size: 16px;
    line-height: 1.625;
    color: #555;
  }
  .item-meta{
    color: #888;
    font-size: 12px
  }
  @media screen and (max-width: 768px){
    .index-main-container{
      width: 94%;
    }
  }
</style>
