import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import {HOME} from '@/router/url'

Vue.use(VueRouter)

const DEFAULT_TITLE = 'Resume - Vinh Do';

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
      {
        path: HOME.path,
        name: HOME.name,
        meta: {
            title: DEFAULT_TITLE
        },
        component: (): any => import('../pages/Home/index.vue')
      }
  ]
});

router.afterEach((to, from) => {
    Vue.nextTick(() => {
        document.title = DEFAULT_TITLE;
    });
});

export default router
