import AboutViewVue from '@/views/AboutView.vue'
import HomeViewVue from '@/views/HomeView.vue'
import CreateView from '@/views/CreateView.vue'
import loginView from '@/views/loginView.vue'
import StoreView from '@/views/StoreView.vue'

import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeViewVue
    },
    {
      path: '/about',
      name: 'about',
      component: AboutViewVue
    },
    {
      path: '/create-car',
      name: 'create-car',
      component: StoreView
    },
    {
      path: '/login',
      name: 'login',
      component: loginView
    },
    {
      path: '/create',
      name: 'create',
      component: CreateView
    }
  ]
})

export default router
