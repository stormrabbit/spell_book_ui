import Vue from 'vue'
import VueRouter from 'vue-router'
import SpellBookPage from './../containers/SpellBookPage.vue';
import Charactor from '../containers/Charactor.vue';
import Editor from '../containers/Editor';
import Weibo from '../containers/Weibo.vue';
Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'SpellBookPage',
    component: SpellBookPage
  },
  {
    path: '/charactor',
    name: 'Charactor',
    component: Charactor
  },
    {
        path: '/editor',
        name: 'Editor',
        component: Editor
    },{
      path: '/weibo',
      name: 'Weibo',
      component: Weibo
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router