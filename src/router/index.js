import Vue from 'vue'
import VueRouter from 'vue-router'
import SpellBookPage from './../containers/SpellBookPage.vue';
import Charactor from '../containers/Charactor.vue';
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
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router