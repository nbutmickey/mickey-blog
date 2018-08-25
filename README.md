# 个人博客
> 一款基于vue.js+Express+MySQL的个人博客   

![npm](https://img.shields.io/badge/npm-v6.2.0-orange.svg) ![vue.js](https://img.shields.io/badge/vue.js-2.5.2-brightgreen.svg) ![Express](https://img.shields.io/badge/Express-4.16.0-blue.svg) ![mySQL](https://img.shields.io/badge/mysql-2.16.0-green.svg)   
   
博客线上地址：[blog.mickey-nbut.cn](https://blog.mickey-nbut.cn/#/)   
博客后台源码地址：[mickey-blog-admin](https://github.com/nbutmickey/mickey-blog-admin)   
> 由于本人在设计上缺乏缺陷，博客中的部分样式参考了大佬[翁天信的博客](https://blog.dandyweng.com/)和学长的博客[cykspace](https://github.com/chenyinkai/cykspace)
# 结构目录   
├─ bin
│  └─ www
├─ build
│  ├─ build.js
│  ├─ check-versions.js
│  ├─ logo.png
│  ├─ utils.js
│  ├─ vue-loader.conf.js
│  ├─ webpack.base.conf.js
│  ├─ webpack.dev.conf.js
│  └─ webpack.prod.conf.js
├─ config
│  ├─ dev.env.js
│  ├─ index.js
│  └─ prod.env.js
├─ server
│  ├─ db
│  │  ├─ db.js
│  │  └─ dbConnect.js
│  ├─ routes
│  │  ├─ admin
│  │  │  ├─ article.js
│  │  │  ├─ auth.js
│  │  │  ├─ message.js
│  │  │  ├─ qiniu.js
│  │  │  └─ tags.js
│  │  ├─ article.js
│  │  ├─ index.js
│  │  ├─ message.js
│  │  └─ tags.js
│  ├─ sql
│  │  └─ sqlMap.js
│  └─ utils
│     ├─ JsonBack.js
│     ├─ emailConfig.js
│     └─ qiniuConfig.js
├─ src
│  ├─ assets
│  │  ├─ iconfont
│  │  │  └─ iconfont.js
│  │  ├─ avator.jpg
│  │  ├─ github.svg
│  │  ├─ header-bg.jpg
│  │  ├─ header.jpg
│  │  ├─ rockets.svg
│  │  ├─ segmentfault.svg
│  │  ├─ user.svg
│  │  └─ weibo.svg
│  ├─ components
│  │  ├─ common
│  │  │  ├─ backToTop.vue
│  │  │  ├─ footBar.vue
│  │  │  ├─ headerBar.vue
│  │  │  ├─ pagination.vue
│  │  │  └─ swiper.vue
│  │  ├─ about.vue
│  │  ├─ archives.vue
│  │  ├─ articles.vue
│  │  ├─ index.vue
│  │  ├─ tagArticle.vue
│  │  └─ tags.vue
│  ├─ router
│  │  └─ index.js
│  ├─ style
│  │  ├─ base.css
│  │  ├─ md.css
│  │  └─ responsive.css
│  ├─ util
│  │  └─ formDate.js
│  ├─ App.vue
│  └─ main.js
├─ static
│  ├─ .gitkeep
│  ├─ swiper.min.css
│  └─ swiper.min.js
├─ .babelrc
├─ .editorconfig
├─ .gitignore
├─ .postcssrc.js
├─ README.md
├─ app.js
├─ ecosystem.json
├─ favicon.ico
├─ index.html
├─ package-lock.json
└─ package.json
# 相关技术栈
# 未来可能加入
# 用法
