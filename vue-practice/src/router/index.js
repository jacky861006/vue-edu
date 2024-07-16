import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/makeMeRed',
      name: 'makeMeRed',
      component: () => import('../views/MakeMeRed.vue')
    },
    {
      path: '/MyCount',
      name: 'MyCount',
      component: () => import('../views/MyCount.vue')
    },
    {
      path: '/MyInput',
      name: 'MyInput',
      component: () => import('../views/MyInput.vue')
    },
    {
      path: '/MyAwesome',
      name: 'MyAwesome',
      component: () => import('../views/MyAwesome.vue')
    }
  ]
})

export default router
