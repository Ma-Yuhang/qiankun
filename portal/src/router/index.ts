
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'app',
      component: () => import('@/views/main')
    },
    {
      path: '/user',
      name: 'user',
      component: () => import('@/views/user')
    },
    {
      path: '/message',
      name: 'message',
      component: () => import('@/views/message')
    },
  ]
});

export default router