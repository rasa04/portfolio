import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PortfolioView from "@/views/PortfolioView.vue";
import StatisticsView from "@/views/StatisticsView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: PortfolioView
    },
    {
      path: '/statistics',
      name: 'statistics',
      component: StatisticsView
    },
    {
      path: '/motley',
      name: 'motley',
      component: () => import('@/views/MotleyView.vue')
    }
  ]
})

export default router
