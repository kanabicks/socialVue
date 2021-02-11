import Vue from 'vue'
import VueRouter from 'vue-router'
//import { component } from 'vue/types/umd'
import User from '../views/User.vue'
import Login from '../views/Login.vue'
import home from '../components/home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '../views/User.vue',
    name: 'User',
    component: User
  },
  {
    path: '../views/Login.vue',
    name: 'Login',
    component: Login
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
