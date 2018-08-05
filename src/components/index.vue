<template>
<div class="index">
  <div class="index-main-container">
    <section style="padding-top: 30px">
      <div class="article" v-for="(item,index) in articles.dataList" :key="index" >
        <div class="article-expand">
          <router-link class="article-title" :to="{name:'articles',params:{id:item.postId}}">{{item.title}}</router-link>
          <div class="article-meta" >
            <font-awesome-icon :icon="['fas','calendar-times']" class="time" ></font-awesome-icon>
            <span class="time">{{time(item.date)}}</span> |
            <font-awesome-icon :icon="['fas','folder']" class="tags"></font-awesome-icon>
            <span class="tags">{{item.tags.indexOf(',')?item.tags.replace(',',' '):item.tags}}</span> |
            <font-awesome-icon :icon="['fas','eye']" class="count"></font-awesome-icon>
            <span class="count">{{item.readNum}}</span>
          </div>
          <div class="article-desc" v-html="item.desc">
           </div>
        </div>
      </div>
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
            pageNow:1
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
    font-size: 10px
  }

  .article{
    border-radius: 5px;
    box-shadow:3px 5px 5px #1b1f23;
    margin-bottom: 20px;
    cursor: pointer;
  }
  .index-main-container{
    width: 700px;
    height: auto;
    margin:0 auto;
  }
  @media screen and (max-width: 768px){
    .index-main-container{
      width: 94%;
    }
  }
</style>
