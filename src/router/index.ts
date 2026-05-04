import { createRouter, createWebHistory } from 'vue-router'
import AboutUs from '@/views/AboutUs.vue'
import Hackathon from '@/views/Hackathon.vue'

export const routes = [
  { path: '/aboutUs', name: 'AboutUs', component: AboutUs },
  { path: '/hackathon', name: 'Hackathon', component: Hackathon },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, _from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { top: 0, left: 0 }
  },
})

export default router