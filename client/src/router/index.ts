import { AUTH_ROUTE, CHAT_ROUTE, EDITOR_ROUTE, HOME_ROUTE, MAIN_PAGE, REGISTRATION_ROUTE } from '@/utils/consts'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: HOME_ROUTE,
      name: 'name',
      component: () => import('@/pages/HomePage.vue')
    },
    {
      path: EDITOR_ROUTE,
      name: 'editor',
      component: () => import('@/pages/EditorPage.vue')
    },
    {
      path: AUTH_ROUTE,
      name: 'auth',
      component: () => import('@/pages/AuthPage.vue')
    },
    {
      path: REGISTRATION_ROUTE,
      name: 'registration',
      component: () => import('@/pages/AuthPage.vue')
    },
    {
      path: CHAT_ROUTE,
      name: 'chat',
      component: () => import('@/pages/ChatPage.vue')
    },
    {
      path: MAIN_PAGE,
      name: 'main',
      component: () => import('@/pages/MainPage.vue')
    },
  ]
})

export default router