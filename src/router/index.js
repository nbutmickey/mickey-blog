import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import about from '@/components/about'
import archives from '@/components/archives'
import articles from '@/components/articles'
import tags from '@/components/tags'
import tagArticle from '@/components/tagArticle'
import swiper from '@/components/common/swiper'
Vue.use(Router);

export default new Router({
  routes: [
    {
      path:'/',
      component:swiper,
      children:[
        {
          path: 'index',
          name: 'index',
          component: index
        },

        {
          path:'archives',
          name:'archives',
          component:archives
        },
        {
          path:'about',
          name:'about',
          component:about
        },
        {
          path:'tags',
          name:'tags',
          component:tags
        }
      ]
    },
    {
      path:'/articles/:id',
      name:'articles',
      component: articles
    },
    {
      path:'/tags/:id',
      name:'tagArticle',
      component:tagArticle
    },
  ]
})
