import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import {HOME} from '@/router/url'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: HOME.path,
    name: HOME.name,
    component: (): any => import('../pages/Home/index.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
