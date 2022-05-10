import Vue from 'vue'
import VueRouter from 'vue-router'
import LottoView from '@/views/LottoView.vue'
import LunchView from '@/views/LunchView.vue' //@ : 루트폴더

Vue.use(VueRouter)

const routes = [
  {
    path: '/lunch/',
    name: 'lunchview',
    component: LunchView
  },
  {
    path: '/lotto/:lottoNum',
    name: 'lottoview',
    component: LottoView
  },


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
