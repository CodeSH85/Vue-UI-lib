import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/local',
    name: 'Local',
    component: () => import('../views/LocalView.vue')
  },
  {
    path: '/diagram',
    name: 'Diagram',
    component: () => import('../views/DiagramView.vue')
  },
  {
    path: '/form',
    name: 'Form',
    component: () => import('../views/FormView.vue')
  },
  {
    path: '/local',
    name: 'Local',
    component: () => import('../views/LocalView.vue')
  },
  {
    path: '/test',
    name: 'Test',
    component: () => import('../views/TestView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
