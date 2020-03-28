import Vue from 'vue'
import Router from 'vue-router'
import VueRouter from 'vue-router'

Vue.use(Router)

import index from '../statistics/index'
import dailyreport from '../statistics/dailyreport/dailyreport'
import consultdailyreport from '../statistics/dailyreport/consultdailyreport'
import multidailyreport from '../statistics/dailyreport/multidailyreport'

const routes = [
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
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
