
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RestaurantView from '../views/RestaurantView.vue'
import ReservationsView from '../views/ReservationsView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/restaurant/:id',
      name: 'restaurant',
      component: RestaurantView
    },
    {
      path: '/reservations',
      name: 'reservations',
      component: ReservationsView
    }
  ]
})

export default router
