<template>
<div class="index">
  <div class="index-main-container">
    <section style="padding-top: 30px">
      <div class="article">
        <div class="article-expand">
          <h2 class="article-title">Nginx部署项目</h2>
          <div class="article-meta" >
            <font-awesome-icon :icon="['fas','calendar-times']" style="color: red" ></font-awesome-icon>
             2017.6.4 |
            <font-awesome-icon :icon="['fas','folder']" style="color: yellow"></font-awesome-icon>
             nginx    |
            <font-awesome-icon :icon="['fas','eye']" ></font-awesome-icon>
             200
          </div>
          <div class="article-desc">利用Nginx部署Vue.js+Node.js+MySQL的开源项目
            利用Nginx部署Vue.js+Node.js+MySQL的开源项目利用Nginx部署Vue.js+Node.js+MySQL的开源项目利用Nginx部署Vue.js+Node.js+MySQL的开源项目
            利用Nginx部署Vue.js+Node.js+MySQL的开源项目利用Nginx部署Vue.js+Node.js+MySQL的开源项目利用Nginx部署Vue.js+Node.js+MySQL的开源项目
           </div>
        </div>
      </div>

      <div class="article" style="border-radius: 5px;box-shadow:5px 5px 20px #333333;;margin-bottom: 20px">
        <div class="article-expand" style="display: inline-block;">
          <h2 class="article-title" style="color: #333;font-size: 26px;padding: 5px 10px">Html如此so easy</h2>
          <div class="article-meta" style="padding:10px;font-size: 16px" >
            <font-awesome-icon :icon="['fas','calendar-times']" style="color: red" ></font-awesome-icon>
            2017.6.4 |
            <font-awesome-icon :icon="['fas','folder']" style="color: yellow"></font-awesome-icon>
            nginx    |
            <font-awesome-icon :icon="['fas','eye']" ></font-awesome-icon>
            200
          </div>
          <div class="article-desc" style="padding: 10px;word-break: break-word">利用Nginx部署Vue.js+Node.js+MySQL的开源项目
            利用Nginx部署Vue.js+Node.js+MySQL的开源项目利用Nginx部署Vue.js+Node.js+MySQL的开源项目利用Nginx部署Vue.js+Node.js+MySQL的开源项目
            利用Nginx部署Vue.js+Node.js+MySQL的开源项目利用Nginx部署Vue.js+Node.js+MySQL的开源项目利用Nginx部署Vue.js+Node.js+MySQL的开源项目
          </div>
        </div>
      </div>

      <div class="article" style="border-radius: 5px;box-shadow:5px 5px 20px #333333;;margin-bottom: 20px">
        <div class="article-expand" style="display: inline-block;">
          <h2 class="article-title" style="color: #333;font-size: 26px;padding: 5px 10px">Nginx部署项目</h2>
          <div class="article-meta" style="padding:10px;font-size: 16px" >
            <font-awesome-icon :icon="['fas','calendar-times']" style="color: red" ></font-awesome-icon>
            2017.6.4 |
            <font-awesome-icon :icon="['fas','folder']" style="color: yellow"></font-awesome-icon>
            nginx    |
            <font-awesome-icon :icon="['fas','eye']" ></font-awesome-icon>
            200
          </div>
          <div class="article-desc" style="padding: 10px;word-break: break-word">利用Nginx部署Vue.js+Node.js+MySQL的开源项目
            利用Nginx部署Vue.js+Node.js+MySQL的开源项目利用Nginx部署Vue.js+Node.js+MySQL的开源项目利用Nginx部署Vue.js+Node.js+MySQL的开源项目
            利用Nginx部署Vue.js+Node.js+MySQL的开源项目利用Nginx部署Vue.js+Node.js+MySQL的开源项目利用Nginx部署Vue.js+Node.js+MySQL的开源项目
          </div>
        </div>
      </div>

      <div class="article" style="border-radius: 5px;box-shadow:5px 5px 20px #333333;;margin-bottom: 20px">
        <div class="article-expand" style="display: inline-block;">
          <h2 class="article-title" style="color: #333;font-size: 26px;padding: 5px 10px">Nginx部署项目</h2>
          <div class="article-meta" style="padding:10px;font-size: 16px" >
            <font-awesome-icon :icon="['fas','calendar-times']" style="color: red" ></font-awesome-icon>
            2017.6.4 |
            <font-awesome-icon :icon="['fas','folder']" style="color: yellow"></font-awesome-icon>
            nginx    |
            <font-awesome-icon :icon="['fas','eye']" ></font-awesome-icon>
            200
          </div>
          <div class="article-desc" style="padding: 10px;word-break: break-word">利用Nginx部署Vue.js+Node.js+MySQL的开源项目
            利用Nginx部署Vue.js+Node.js+MySQL的开源项目利用Nginx部署Vue.js+Node.js+MySQL的开源项目利用Nginx部署Vue.js+Node.js+MySQL的开源项目
            利用Nginx部署Vue.js+Node.js+MySQL的开源项目利用Nginx部署Vue.js+Node.js+MySQL的开源项目利用Nginx部署Vue.js+Node.js+MySQL的开源项目
          </div>
        </div>
      </div>

    </section>
  </div>
</div>
</template>

<script>
    export default {
        name: "index",
        data(){
          return {
            bg:require('../assets/65.jpg')
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
    color: #333;
    font-size: 26px;
    padding: 5px 10px;
  }
  .article-expand{
    display: inline-block;
  }
  .article-desc{
    padding: 10px;
    word-break: break-word
  }
  .article-meta{
    padding:10px;
    font-size: 16px
  }

  .article{
    border-radius: 5px;
    box-shadow:5px 5px 20px #333333;
    margin-bottom: 20px
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
