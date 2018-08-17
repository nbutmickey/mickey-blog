<template>
  <div class="footer">
    <div class="footer-inner">
      <p style="padding: 5px 0 3px">Designed and developed By nbut_Mickey</p>
      <p>Copyright &copy; 2017 - {{year}}  All Rights Reserved</p>
      <p style="text-align: center;color: #999988;padding: 8px 0 2px">
         <span id="busuanzi_container_site_pv">本站总访问量<span id="busuanzi_value_site_pv"></span>次</span> |
         <span id="busuanzi_container_site_uv">您是第<span id="busuanzi_value_site_uv"></span>个访客 |
           <a href="http://www.miitbeian.gov.cn">浙ICP备18029935号</a>
      </span>
      </p>
    </div>
  </div>
</template>

<script>
    export default {
        name: "footBar",
        data(){
          return {
            year:''
          }
        },
        mounted(){
          this.year=new Date().getFullYear()
        }
    }
</script>

<style scoped lang="less">


  .footer {
    position: relative;
    left: 0;
    bottom: 0;
    width: 100%;
    min-width: 350px;
    font-size: 14px;
    color: #999;
    .footer-inner {
      text-align: center;
      margin: 5px 0;
    }
  }
</style>
