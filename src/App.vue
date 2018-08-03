<template>
  <div id="app">
    <header-bar></header-bar>
    <swiper></swiper>
    <!--<router-view/>-->
    <footer-bar></footer-bar>
  </div>
</template>

<script>

  import headerBar from './components/common/headerBar'
  import footerBar from './components/common/footBar'
  import swiper from './components/common/swiper'

export default {
    name:'App',
    components:{
      headerBar,
      footerBar,
      swiper
    }
}
</script>

<style>
  /*引入全局样式*/
  @import './style/base.css';
  #app{
    position: relative;
  }
</style>
