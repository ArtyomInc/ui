import ComponentsView from '@/views/Components.vue'
import GuideView from '@/views/Guide.vue'
import HomeView from '@/views/Home.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      component: HomeView,
      name: 'home',
      path: '/'
    },
    {
      component: GuideView,
      name: 'guide',
      path: '/guide'
    },
    {
      component: ComponentsView,
      name: 'components',
      path: '/components'
    }
  ]
})

export default router
