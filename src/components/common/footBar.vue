<template>
  <div class="footer">
    <div class="footer-inner">
      <div class="contact-container">
        <span style="text-align: center;color: #999;display: block;padding: 10px 0">您可以通过以下方式联系我</span>
        <a href="https://github.com/nbutmickey"><img src="../../assets/github.svg"  class="contact-img"/></a>
        <a href="https://segmentfault.com/u/mickey_5a27591c1c134"><img src="../../assets/segmentfault.svg" class="contact-img"/></a>
        <a href=""><img src="../../assets/weixin.svg" class="contact-img"/></a>
        <a href="https://weibo.com/u/3276865015?refer_flag=1001030101_&is_hot=1"><img src="../../assets/weibo.svg" class="contact-img"/></a>
        <a href=""><img src="../../assets/qq.svg" class="contact-img"/></a>
      </div>
      <div><span>&copy;2017 - {{year}}</span> | <a href="http://www.miitbeian.gov.cn">浙ICP备18029935号</a></div>
      <span style="display: block;text-align: center;color: #999988;padding: 10px 0 0">
         <span id="busuanzi_container_site_pv">本网站总访问量<span id="busuanzi_value_site_pv"></span>次</span> |
         <span id="busuanzi_container_site_uv">您是第<span id="busuanzi_value_site_uv"></span>个访客
      </span>
      </span>
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
  .contact-container{
    margin-bottom: 10px;
  }
  .contact-container a{
    cursor: pointer;
    padding: 8px;
    opacity: 0.6;
  }
  .contact-container a:hover{
    opacity: 1;
  }
  .contact-img{
    cursor: pointer;
    width: 25px;
    height:25px
  }

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
