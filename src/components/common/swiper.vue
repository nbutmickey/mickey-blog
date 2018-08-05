<template>
<div class="swiper-box">
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" style="height: auto"><index></index></div>
      <div class="swiper-slide"><tags></tags></div>
      <div class="swiper-slide"><archives></archives></div>
      <div class="swiper-slide"><about></about></div>
    </div>
  </div>
</div>
</template>

<script>
  import index from '../index'
  import about from '../about'
  import archives from '../archives'
  import tags from '../tags'
  import articles from '../articles'
  // 引入swiper的js文件和css样式表
  import Swiper from '../../../static/swiper.min'
  import '../../../static/swiper.min.css';
    export default {
      name: "swiper",
      components:{
        index,
        about,
        tags,
        archives
      },
      mounted(){
        let mySwiper=new Swiper('.swiper-container',{
          initialSlide:this.$route.path==='/index'?0:this.$route.path==='/tags'?1:this.$route.path==='/archives'?2:
            this.$route.path==='/about'?3:0
        });
        //当滑动到某个页面的时候，立即发射当前页面index的信号
        mySwiper.on('onSlideChangeEnd',()=>{
          //第一个参数为发射名，第二个为传出的参数
          this.$root.$emit('slideTab',mySwiper.activeIndex);
        });
        //监听并接收来自点击tab导航栏的index信号，并根据相应的index进行切换
        this.$root.$on('changeTab',(index)=>{

          mySwiper.slideTo(index,0,false);
          // index:指定要切换到的slide的索引
          // speed:切换速度
          // runcallback:回调函吗，设置为false则代表不会触发onSliderChange函数
        })
      }
    }
</script>

<style scoped>

</style>
