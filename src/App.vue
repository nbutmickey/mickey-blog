<template>
  <div id="app">
    <header-bar></header-bar>
    <router-view></router-view>
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
  @import './style/md.css';
</style>
