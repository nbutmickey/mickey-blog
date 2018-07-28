<template>
<div class="footerBar">
  <footer>
    <div class="footer-inner">
      <span>@2017 - {{year}}</span> | <span>nbut_mickey</span>
    </div>
  </footer>
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
  footer{
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    min-width: 350px;
    font-size: 14px;
    color: #999;
    .footer-inner{
      text-align: center;
      margin: 10px 0;
    }
  }
</style>
