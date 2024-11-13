import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      component: () => import('@/views/Home.vue'),
      name: 'home',
      path: '/'
    },
    {
      component: () => import('@/views/Guide.vue'),
      name: 'guide',
      path: '/guide'
    },
    {
      component: () => import('@/views/Components.vue'),
      name: 'components',
      path: '/components'
    }
  ]
})

export default router
