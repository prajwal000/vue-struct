import { createRouter, createWebHistory } from 'vue-router'
import Index from "../Pages/Index.vue"





const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: ()=>Index,
      

    },
    {
      path: '/about',
      name: 'aboutus',
      component: () => import('../Pages/About.vue'),
     
    },
   

  ]
})

export default router
