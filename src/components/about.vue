<template>
<div>
  <div class="message-container">
    <div class="about-me">
      <h1 class="about-title">关于我</h1>
      <div class="about-avator"><img src="../assets/avator.jpg"/></div>
      <div class="about-content">
        <h3 class="about-summary-title">个人简介</h3>
        <div class="about-summary-content">
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
        <textarea v-model="content" rows="3"  placeholder="写点什么吧。。。" id="message-textArea" class="message-textArea"></textarea>
        <div class="message-submit-button"><span>{{notice}}</span><span  @click="submitMessage"><font-awesome-icon :icon="['fas','check-square']"></font-awesome-icon> 提交</span></div>
        <div class="message-detail" id="message-detail">
            <h3>Hi,留下你的信息吧~</h3>
            <div class="message-input">
              <div>称呼：<input v-model="name"  placeholder="怎么称呼？"/></div>
              <div>邮箱：<input v-model="email" type="text" placeholder="E-mail地址"/></div>
            </div>
            <span style="color: red;display: block;padding: 5px 0;font-size: 10px">温馨提示：由于地理位置根据IP进行定位，所以可能会存在错误，谢谢！</span>
          </div>
        <div class="comment">
          <section class="comment-list" v-for="(comment) in commentList">
          <header>
            <img src="../assets/user.svg"/>
            <div class="comment-meta">
              <h3>{{comment.name}}</h3>
              <h6><time>{{date(comment.time)}}</time> 在{{comment.address}}说:</h6>
            </div>
          </header>
          <div class="comment-content">
            <p>{{comment.content}}</p>
          </div>
        </section>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
  let myVue;
  import {formatTime} from '../util/formDate'
    export default {
        name: "about",
        data(){
          return {
            notice:'',
            content:'',
            name:'',
            email:'',
            address:'',
            ip:'',
            commentList:[]
          }
        },
      created(){
        this.getAllComments();
      },
      beforeCreate(){
          myVue=this;
      },
        mounted(){
          $("#message-textArea").click(this.getChange);
        },
        methods:{
          getChange:function () {
            $("#message-detail").slideDown();
          },
          submitMessage:function () {
            if(this.name===''){
              this.notice="称呼是必填项哦"
            }else if(this.email===''){
              this.notice="E-mail是必填项哦"
            } else {
            let date=new Date();
            let message={
              name:this.name,
              email:this.email,
              content:this.content,
              address:this.address,
              ip:this.ip,
              time:date.getTime(),
            };
            this.$http.post('/api/postMessage',{params:{message}}).then(res=>{
              this.content='';
              this.name='';
              this.email='';
              if(res.data==='success'){
                $("#message-detail").slideUp();
                myVue.getAllComments();
              }else {
                alert("提交出错！")
              }
            })
            }
          },
          getAllComments:function () {
            this.$http.get('/api/getAllMessages').then(res=>{
              this.commentList=res.data;
            })
          },
          date:function (times) {
            return formatTime(times,'yyyy.mm.dd hh:mm:ss');
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
.about-summary-title{
  border-bottom: 1px solid #eee;
  padding-bottom: 10px;
}
.about-summary-content{
  padding: 10px 0;
  line-height: 2;
  text-indent: 15px
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
.message-textArea{
  overflow: visible;
  padding: 5px;
  width: 100%;
  border: 1px solid #d9d9d9
}
.message-input{
  display: inline-block;
  border-left: 2px solid #009A61;
  padding-left: 10px;
  line-height: 2.5
}
.message-detail{
  width: 100%;
  padding-left: 5px
}
.message-detail h3{
  margin: 10px 0;
}
.message-input div input{
  border: 1px solid #d9d9d9;
  font-size: 12px;padding: 5px;
  border-radius: 2px
}
.message-submit-button{
  text-align: right;
  margin-top: 10px
}
.message-submit-button span:first-of-type{
  text-align: right;
  color: red;
  margin-right: 10px
}
.message-submit-button span:last-of-type{
  background: #5fbaac;
  color:#fff;
  font-size: 15px;
  padding:5px 8px;
  cursor: pointer
}
.message-detail{
  display: none;
}
.comment{
  margin-top: 30px;
}
.comment-meta{
  display: inline-block;
  vertical-align: middle;
  margin-left: 10px
}
.comment-meta h3{

  margin-bottom: 2px;
}
.comment-meta h6{
  color: #009A61;
}
.comment-list{
  border-bottom: 1px solid #dfe2e5;
  margin-top: 10px;
  position: relative;
  top: -20px;
  opacity: 0;
  animation: down 0.5s 0.5s linear;
  animation-fill-mode: both;
}
.comment-list img{
  width: 45px;
  vertical-align: middle
}
.comment-content{
  padding: 10px 0;
  color: rgba(0, 0, 0, 0.6)
}
@media screen and (max-width: 768px){
  .message-container{
    width: 94%;
  }
}
</style>
