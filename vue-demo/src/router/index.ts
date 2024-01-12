
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory('/vue-demo'),
  routes: [
    {
      path: '/',
      name: 'app',
      redirect: '/user',
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