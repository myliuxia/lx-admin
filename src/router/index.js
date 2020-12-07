import Vue from 'vue'
import VueRouter from 'vue-router'
import { routes } from './map'
import layout from '@/layout/index.vue'

const load = (name, ext = 'vue') => () => import(`@/pages/${name}.${ext}`)

routes.push({
  name: 'home',
  path: '/home',
  component: load('home/index'),
  meta: {
    title: '首页',
    pool: true,
    cache: true,
    requiresAuth: true,
  },
})

Vue.use(VueRouter)
export default () => {
  const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
      {
        path: '/',
        redirect: {
          name: 'home',
        },
        component: layout,
        children: routes,
      },
      {
        name: 'forbidden',
        path: '/error-forbidden',
        component: load('error/error-403/index'),
        meta: {
          title: '无权访问',
          requiresAuth: false,
        },
      },
      {
        name: 'not-found',
        path: '*',
        component: load('error/error-404/index'),
        meta: {
          title: '页面不存在',
          requiresAuth: false,
        },
      },
    ],
  })
  return router
}
