// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import {library} from '@fortawesome/fontawesome-svg-core'
import {faHome,faTags,faArchive,faUser,faCalendarTimes,faFolder,faEye} from '@fortawesome/free-solid-svg-icons'

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

//引入font-awesome-icon的全局配置
library.add(faHome,faTags,faArchive,faUser,faCalendarTimes,faFolder,faEye);
Vue.component('font-awesome-icon', FontAwesomeIcon);

//进度条全局配置
router.beforeEach((to,from,next) =>{
  NProgress.start();
  next()
});

router.afterEach((transition) =>{
  NProgress.done();
});


Vue.config.productionTip = false;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  // data:{
  //   eventHub:new Vue()  //设置集中的事件处理器，一劳永逸的在任何组件中调用事件发射和接收的方法。
  // }
});
