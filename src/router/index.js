import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import about from '@/components/about'
import archives from '@/components/archives'
import article from '@/components/article'
import tags from '@/components/tags'
import tagArticle from '@/components/tagArticle'
Vue.use(Router);

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path:'/article/:id',
      name:'article',
      component:article
    },
    {
      path:'/archives',
      name:'archives',
      component:archives
    },
    {
      path:'/about',
      name:'about',
      component:about
    },
    {
      path:'/tags/:id',
      name:'tagArticle',
      component:tagArticle
    },
    {
      path:'/tags',
      name:'tags',
      component:tags
    }
  ]
})
