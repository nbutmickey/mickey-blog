<template>
<div class="headerBar">
  <header :style="{background:'url('+backgroundImage+')'}">
    <!--//顶部导航栏-->
    <div class="navBar" v-if="isNavBarShow">
      <nav>
        <ul class="navBar-menu">
          <li class="navBar-menu-item" v-for="(item,index) in navList">
            <router-link :to="{name:item.routeToName}" @click.native="tabClick(index)" exact>
              <font-awesome-icon :icon="['fas',item.iconName]"/>
              <span>{{item.navName}}</span>
            </router-link>
          </li>
        </ul>
      </nav>
    </div>

    <div class="header-inner">
      <div class="author">
        <a href="/" class="brand">
          <span class="site-author">米奇</span>
        </a>
      </div>
      <!--头部，主要包含作者信息-->
      <nav>
        <ul class="menu">
          <li class="menu-item" v-for="(item,index) in navList" >
          <router-link :to="{name:item.routeToName}"  @click.native="tabClick(index)" exact>
            <font-awesome-icon :icon="['fas',item.iconName]"/>
            <span>{{item.navName}}</span>
          </router-link>
        </li>
        </ul>
      </nav>
      <!--头部导航区，也称主导航-->
    </div>
  </header>
</div>
</template>

<script>
    export default {
        name: "headerBar",
        data(){
          return {
            backgroundImage:require('../../assets/header-bg.jpg'),
            isNavBarShow:false,
            navList:[
              {routeToName:'index',iconName:'home',navName:'首页'},
              {routeToName:'tags',iconName:'tags',navName:'标签'},
              {routeToName:'archives',iconName:'archive',navName:'归档'},
              {routeToName:'about',iconName:'comment-alt',navName:'留言'},
            ]
          }
        },
      methods:{
        calTopHeight(){
          let scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
          if(scrollTop>260||scrollTop>325){
            this.isNavBarShow=true;
          }else{
            this.isNavBarShow=false;
          }
        },
        //导航栏点击对应的导航目录切换swiper组件内容函数，根据index进行切换
        tabClick(index){
          this.$root.$emit('changeTab',index);
        },
        slideTab(index){
          let href=index===0?'/index':index===1?'/tags':index===2?'/archives':index===3?'/about':'/';
          //利用路由的push方法更新路由
          this.$router.push(href);
        }
      },
      mounted(){
            window.addEventListener('scroll',this.calTopHeight);
            //监听并接收swiper发射的index信号（参数第一个是信号名，第一个是对应的回调函数）
            this.$root.$on('slideTab',this.slideTab);
      }
    }
</script>

<style scoped lang="less">
  header{
    width:100%;
    height: 325px;
    .header-inner{
      margin: 0 auto;
      padding: 100px 0 70px;
      width: 700px;
      height: 100%;
      position: relative;
    }
    .author{
      text-align: center;
      color: #fff;
      font-size: 30px;
      margin-bottom: 20px;
    }
    .brand{
      position: relative;
      display: inline-block;
      padding: 0 80px;
      line-height: 36px;
    }
    .site-author{
      position: relative;
      top:-50px;
      display: inline-block;
      letter-spacing: 10px;
      color: #f5f5f5;
      font-size: 50px;
      vertical-align: top;
      font-weight: normal;
      line-height: 56px;
      opacity: 0;
      animation:down 1.2s  linear;
      animation-fill-mode: forwards;
      &:hover{
        transform: scale(1.3);
        transition: all 1s;
      }
    }
    .menu {
      margin: 20px auto 0;
      width: 450px;
      height: 64px;
      background: rgba(255, 255, 255, 0.65);
      display: flex;
      padding: 10px 30px;
      .menu-item {
        flex: 1;
        .router-link-active {
          svg {
            opacity: 1;
          }
          span {
            opacity: 1;
            &::before {
              visibility: visible;
              transform: scaleX(1);
            }
          }
        }
      }
      a {
        position: relative;
        cursor: pointer;
        color: #333;
        font-size: 16px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between; //设置两端对齐，相对于主轴从左到右来说。
        height: 100%;
        top: -40px;
        opacity: 0;
        animation: down .6s .4s linear;
        animation-fill-mode: forwards;
        svg {
          opacity: 0.6;
        }
        span {
          position: relative;
          opacity: 0.8;
          &::before {
            content: '';
            position: absolute;
            width: 100%;
            height: 1px;
            bottom: -5px;
            left: 0;
            background-color: #333;
            visibility: hidden;
            transform: scaleX(0);
            transition: all .2s ease-in-out;
          }
        }
      }
  }
  .navBar{
    width: 100%;
    height: 40px;
    background-color: rgba(0,0,0,0.4);
    position: fixed;
    left: 0;
    top: 0;
    padding: 0;
    margin: 0;
    z-index: 10;
    nav{
      width: 700px;
      margin: 0 auto;
      .navBar-menu{
        display: flex;
        align-items: center;
        height: 40px;
        /*justify-content: center;*/
        .navBar-menu-item{
          height: 100%;
          padding: 0 10px;
          line-height: 40px;
          cursor: pointer;
          a{
            color: #fff;
          }
          span{
            color: #fff;
          }
        }
      }
    }

  }
}


//针对移动端
@media screen and(max-width: 768px) {
  header {
    min-width: 350px;
    height: 260px;
    .header-inner {
      width: auto;
    }
    nav {
      width: 80%;
      margin: 0 auto;
      .menu {
        width: 100%;
      }
    }
  }
}
@media screen and(max-width: 768px) {
  .navBar {
    nav {
      width: 90%;
      min-width: 350px;
    }
  }
}
</style>
