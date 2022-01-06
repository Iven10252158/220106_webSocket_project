import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About.vue')
  },
  {
    path: '/contentA',
    props: (route) => ({ contentA: route.query }),
    component: () => import('@/views/ContentA.vue')
  },
  {
    path: '/contentB',
    props: (route) => ({ contentB: route.query }),
    component: () => import('@/views/ContentB.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
