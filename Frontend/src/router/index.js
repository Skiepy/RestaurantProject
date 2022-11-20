import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/register',
    name: 'register',

    component: () => import('../components/MyRegister.vue')
  },
  {
    path: '/login',
    name: 'login',

    component: () => import('../components/MyLogin.vue')
  },
  {
    path: '/booking',
    name: 'booking',

    component: () => import('../components/MyBooking.vue')
  },
  {
    path: '/profile',
    name: 'profile',

    component: () => import('../views/ProfileView.vue')
  },
  {
    path: '/updateProfile',
    name: 'updateProfile',

    component: () => import('../components/MyProfile.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
