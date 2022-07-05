import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import AppLayoutVue from '../layout/AppLayout.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: AppLayoutVue,
    children: [{
      path: '',
      name: 'home',
      component: () => import('../views/home/index.vue')
    }]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/index.vue')
  }
]
const router = createRouter({
  // history:createWebHistory
  history: createWebHashHistory(),
  routes
})

export default router
