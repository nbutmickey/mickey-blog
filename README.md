# 个人博客
> 一款基于vue.js+Express+MySQL的个人博客   

![npm](https://img.shields.io/badge/npm-v6.2.0-orange.svg) ![vue.js](https://img.shields.io/badge/vue.js-2.5.2-brightgreen.svg) ![Express](https://img.shields.io/badge/Express-4.16.0-blue.svg) ![mySQL](https://img.shields.io/badge/mysql-2.16.0-green.svg) ![build](https://img.shields.io/badge/build-passing-ff69b4.svg)  
   
博客线上地址：:point_right:[blog.mickey-nbut.cn](https://blog.mickey-nbut.cn/#/)   
博客后台源码地址：:point_right:[mickey-blog-admin](https://github.com/nbutmickey/mickey-blog-admin)   
> 由于本人在设计上缺乏缺陷，博客中的部分样式参考了大佬[翁天信的博客](https://blog.dandyweng.com/)和学长的博客[cykspace](https://github.com/chenyinkai/cykspace)    
   
大佬们如果觉得还行的话，就给个`star`吧，哈哈~
# 描述 
接触前端也快有两年的时间，去年暑假就一直很想做自己的个人博客，但是因为某些不可抗力的因素和学业的繁重，一直就拖到现在，在这里向自己还有支持我的人表示歉意！这款个人博客是基于当前比较流行的三大框架之一---vue,js而建立的，基础功能都已经全部完成，在参考了学长做的博客基础上，添加了许多新功能，比如`swiper实现左右滑动`、`留言板`、`定位`等功能。虽然这些可能对于大佬们来说，都是轻而易举的小事，但是对于我这个前端入门级新手来说，却是自己学习的一个新台阶，我希望通过这个个人博客来传递更多技术信息和分享自己经验的同时，来提高自己的编程水平。
# 相关技术栈
* 前端：webpack + vue + vue-router + axios
* UI：less + fontawesome + swiper + highlight.js + NProgress
* 后台：Express + mysql + ElementUI
* 部署：Nginx + pm2
# 未来可能加入
* ssr
* 文章评论、点赞、分享到站外
* 网易云音乐
* 夜间模式
* 中英文切换
# 用法
如果您的电脑未安装`npm`、`node`、`mysql`,那么请您事先安装好这两个工具。
> git clone代码或者直接download代码
```
git clone git@github.com:nbutmickey/mickey-blog.git
```
> 安装相关依赖
```
npm install
```
> 运行项目
```
npm run dev
```
> 运行后端服务器
```
node ./bin/www
```
> 打包项目
```
npm run build
```
如果在运行过程中遇到什么问题，请在这里[issues](https://github.com/nbutmickey/mickey-blog/issues)提交，我会及时为您解答。
