import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/local',
    name: 'Local',
    component: () => import('../views/LocalView.vue')
  },
  {
    path: '/local',
    name: 'Local',
    component: () => import('../views/LocalView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
