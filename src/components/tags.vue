<template>
<div class="index">
  <div class="post-main-container">
  <div class="post-block">
    <div class="post-cloud">
      <div class="tag-cloud">
        <div class="tag-cloud-title">目前共计{{tagList.length}}个标签</div>
        <div class="tag-cloud-tags">
          <router-link :style="{fontSize:singleTag.length*2+13+'px'}"   :to="{name:'tagArticle',params:{id:singleTag.tagId}}" v-for="(singleTag,i) in tagList" :key="i">{{singleTag.tag}}</router-link>
        </div>
      </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
    export default {
        name: "tags",
        data(){
          return {
            tagList:[]
          }
        },
        mounted(){
          this.$http.get('/api/getAllTags').then(res=>{
            console.log(res);
            this.tagList=res.data;
          });
        }
    }
</script>

<style scoped>
.post-block{
  opacity: 0;
  top: -10px;
  position: relative;
  animation: down 0.5s 0.5s linear;
  animation-fill-mode: both;
}
.post-main-container{
  padding-top: 30px;
  height: 360px;
}
.tag-cloud{
  text-align: center;
}
.tag-cloud-title{
  line-height: 2;
}
.tag-cloud-tags a{
  display: inline-block;
  margin: 10px;
  color: #555;
  outline: none;
  text-decoration: none;
  border-bottom: 1px solid #999;
  word-break: break-word;
}
.tag-cloud-tags a:hover{
  color: #222;
  border-bottom-color:#222;
}
</style>
