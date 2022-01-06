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
    path: '/lightrail',
    props: (route) => ({ lightrail: route.query }),
    component: () => import('@/views/LightRail.vue')
  },
  {
    path: '/station',
    props: (route) => ({ station: route.query }),
    component: () => import('@/views/Station.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
