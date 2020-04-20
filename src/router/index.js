import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import index from 'views/statistics/index'
import dailyreport from 'views/statistics/dailyreport/dailyreport'
import consultdailyreport from 'views/statistics/dailyreport/consultdailyreport'
import multidailyreport from 'views/statistics/dailyreport/multidailyreport'

import Home from 'views/home/Home'
// const Home = () => import('views/home/Home')

const routes = [
  // {
  //   path: '/',
  //   component: Home
  // },
  {
    path: '/statistics/index',
    component: index
  },
  {
    path: '/statistics/dailyreport/dailyreport',
    component: dailyreport
  },
  {
    path: '/statistics/dailyreport/consultdailyreport',
    component: consultdailyreport
  },
  {
    path: '/statistics/dailyreport/multidailyreport',
    component: multidailyreport
  },
  {
    paht: '/views/home/Home',
    component: Home
  }
]

const router = new VueRouter({
  routes
  // mode: 'history'
})

export default router
