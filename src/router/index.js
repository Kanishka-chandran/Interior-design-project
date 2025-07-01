import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'

import LogiN from '@/components/LogiN.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { title: 'Home' }
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
    meta: { title: 'About' }
  },
 
  {
    path: '/login',
    name: 'login',
    component: LogiN,
    meta: { title: 'Login' }
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

// Set page title dynamically
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Interior Design'
  next()
})

export default router
