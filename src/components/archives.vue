<template>
    <div>
      <div class="main-inner">
        <div class="post-collapse">
          <span class="post-move-on"></span>
          <span class="post-count">OK,目前共计{{total}}篇日志，加油，继续努力！</span>
          <div v-for="(item) in articles">
          <div class="collection-title">
            <h3 style="margin-left: 10px;">{{item.year}}</h3>
          </div>
          <div>
            <div class="post" v-for="(result) in item.result">
              <div class="post-header">
                <div class="post-meta">{{time(result.date)}}</div>
                <div class="post-title" style="cursor: pointer"><router-link :to="{name:'articles',params:{id:result.postId}}">{{result.title}}</router-link></div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import {formatTime} from '../util/formDate'
    export default {
        name: "archives",
        data(){
          return{
            total:'',
            articles:[]
          }
        },
        mounted(){
          this.getArchives();
        },
        methods:{
        getArchives:function () {
          this.$http.get('/api/getArchives').then(res=>{
            this.articles=res.data;
            this.total=res.data[0].total;
          })
        },
          time:function (times) {
            return formatTime(times,'yyyy-mm-dd');
          }
        }
    }
</script>

<style scoped>
  .main-inner{
    padding-top: 20px;
    width: 700px;
    margin: 0 auto;
    min-width: 350px;
  }
  .post-collapse{
    position: relative;
    margin-left: 55px;
    /*opacity: 0;*/
    /*top: -20px;*/
    /*animation: down 0.5s 0.5s linear;*/
    /*animation-fill-mode: both;*/
  }
  .post-collapse:after{
    content: " ";
    position: absolute;
    top: 20px;
    margin-left: -3px;
    z-index: -1;
    width: 4px;
    opacity: 0.4;
    background: #333;
    height: 100%;
  }
  .post-move-on{
    position: absolute;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    top: 11px;
    margin-left: -6px;
    opacity: 0.5;
    border: 1px solid #fff;
    background: #555;
  }
  .collection-title{
    position: relative;
    margin:30px 0;
    line-height: 2;
  }
  .collection-title :before{
    content: "";
    position: absolute;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #bbb;
    left: 0;
    top: 50%;
    margin-left: -5px;
    margin-top: -4px;
  }
  .post-count{
    position: relative;
    left: 10px;
    top: 6px;
  }
  .post{
    margin: 30px 0;
  }
  .post-header{
    padding-left: 10px;
    position: relative;
    transition: border 0.2s ease-in-out;
    border-bottom: 1px dashed #ccc;
    line-height: 2;
    /*top: -30px;*/
    /*opacity: 0;*/
    /*animation: down 0.8s 0.8s linear;*/
    /*animation-fill-mode: both;*/
  }
  .post-header:before{
    content: "";
    position: absolute;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #bbb;
    left: 0;
    top: 50%;
    margin-left: -5px;
    margin-top: -4px;
    transition: background 0.2s ease-in-out;
  }

  @media screen and (max-width: 768px){
    .main-inner{
      width: 94%;
    }
    .post-collapse{
      margin-left: 10px;
    }
  }
</style>
