<template>
<div>
  <div class="message-container">
    <div class="about-me">
      <h1 class="about-title">关于我</h1>
      <div class="about-avator"><img src="../assets/avator.jpg"/></div>
      <div class="about-content">
        <h3 style="border-bottom: 1px solid #eee;padding-bottom: 10px;">个人简介</h3>
        <div style="padding: 10px 0;line-height: 2;text-indent: 15px">
        我来自安徽六安,自称“有志”青年，现就读于宁波工程学院，一个快要大三的老学长，在这里偷偷的假装自己是一名程序猿，一名“年轻”的前端攻城狮。
        </div>
        <h3 style="border-bottom: 1px solid #eee;padding:5px 0 10px;">兴趣爱好</h3>
        <div style="padding: 10px 0" class="about-tags">
          <span>吉他</span><span>音乐</span><span>穷游</span><span>敲代码</span>
          <span>尬聊</span>
        </div>
        <h3 style="border-bottom: 1px solid #eee;padding:5px 0 10px;">感情经历</h3>
        <div style="padding: 10px 0;text-indent: 15px" class="about-tags">

        </div>
        <h3 style="border-bottom: 1px solid #eee;padding:5px 0 10px;">我的故事</h3>
        <div style="padding: 10px 0 20px;line-height: 2;text-indent: 15px">
        </div>
      </div>
    </div>
    <div class="messgae-panel">
      <h1 class="message-title">留言板</h1>
      <div class="message-content">
        <textarea  rows="3"  placeholder="写点什么吧。。。" id="message-textArea" style="overflow: visible;padding: 5px;width: 100%" ></textarea>
        <div style="text-align: right;margin-top: 10px"><span style="background: #5fbaac;color:#fff;font-size: 15px;padding: 8px 10px;cursor: pointer"><font-awesome-icon :icon="['fas','check-square']"></font-awesome-icon> 点击提交</span></div>
        <div class="message-detail" id="message-detail" style="width: 100%;padding-left: 5px">
            <h3 style="margin: 10px 0">Hi,留下你的信息吧~</h3>
            <div style="display: inline-block;border-left: 2px solid #009A61;padding-left: 10px;line-height: 2">
              <div>称呼：<input type="text"/></div>
              <div>邮箱：<input type="text"/></div>
            </div>
          </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
    export default {
        name: "about",
        mounted(){
          $("#message-textArea").click(this.getChange)
        },
        methods:{
          getChange:function () {
            $("#message-detail").slideDown();
          }
        }
    }
</script>

<style scoped>
.about-title,.message-title{
  text-align: center;
  position: relative;
  letter-spacing: 2px;
}
.about-title:after,.message-title:after{
  content: "";
  width: 30%;
  height: 3px;
  position: absolute;
  background: #009A61;
  right: 0;
  bottom: 8px;
}

.about-title:before,.message-title:before{
  content: "";
  width: 30%;
  height: 3px;
  position: absolute;
  background: #009A61;
  left: 0;
  bottom: 8px;
}
.about-avator{
  width: 100px;
  height: 100px;
  overflow: hidden;
  border-radius: 50px;
  margin: 20px auto;
}
.about-avator img{
  width: 100px;
  height: 100px;
}
.about-tags span{
  padding: 2px 10px;
  color: #017E66;
  background-color: rgba(1,126,102,0.08);
  text-align: center;
  margin:2px 5px 2px 0;
  cursor: pointer;
}
.about-tags span:hover{
  color: white;
  background-color: #004e31;
}
.message-container{
  width: 700px;
  height: auto;
  margin: 20px auto;
  padding: 10px 30px;
  background: #FFF;
  border-radius: 10px;
  overflow: hidden;
}
.message-content{
  width: 100%;
  padding: 20px 2px;
}
.message-detail{
  display: none;
}
@media screen and (max-width: 768px){
  .message-container{
    width: 94%;
  }
}
</style>
