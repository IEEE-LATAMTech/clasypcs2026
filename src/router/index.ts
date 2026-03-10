import { createRouter, createWebHistory } from 'vue-router'
import AboutUs from '@/views/AboutUs.vue'


export  const routes =[
    { path: '/aboutUs' , name:'AboutUs', component:AboutUs}
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router