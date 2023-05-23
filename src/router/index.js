import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Category from '../views/Category.vue'
import Pricing from '../views/Pricing.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/categories',
      name: 'category',
      component: Category
    },
    {
      path: '/pricing',
      name: 'pricing',
      component: Pricing
    },
    
    
  ]
})

export default router
