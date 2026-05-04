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
})

export default router