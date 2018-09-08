<template>
  <div id="app">
    <header-bar></header-bar>
	<keep-alive>
    <router-view></router-view>
	</keep-alive>
    <footer-bar></footer-bar>
    <back-to-top></back-to-top>
  </div>
</template>

<script>
  import headerBar from './components/common/headerBar'
  import footerBar from './components/common/footBar'
  import swiper from './components/common/swiper'
  import backToTop from './components/common/backToTop'
export default {
    name:'App',
    components:{
      headerBar,
      footerBar,
      swiper,
      backToTop
    }
}
</script>

<style>
  /*引入全局样式*/
  @import './style/base.css';
  @import './style/md.css';
</style>
