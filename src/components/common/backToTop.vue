<template>
  <div class="scrollBar">
    <div class="rocket" @click="goTop">
      <img src="../../assets/rockets.svg">
    </div>
  </div>
</template>

<script>
    export default {
        name: "backToTop",
        methods:{
          goTop:function () {
            let timer = setInterval(function() {
              let scrollTop =
                document.documentElement.scrollTop || document.body.scrollTop;
              let ispeed = Math.floor(-scrollTop / 8);
              if (scrollTop === 0) {
                clearInterval(timer)
              }
              document.documentElement.scrollTop = document.body.scrollTop =
                scrollTop + ispeed
            }, 1000 / 60)
          }
        }
    }
</script>

<style scoped>
  .scrollBar{
    position: fixed;
    right: 10px;
    bottom: 20px;
    z-index: 1050;
  }
.rocket{
  width: 48px;
  height: 48px;
  padding-top: 5px;
  border: 2px solid #cf4a5c;
  text-align: center;
  border-radius: 100%;
  transition: border-color .5s ease-in-out;
  cursor: pointer;
}
</style>
