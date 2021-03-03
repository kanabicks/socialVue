import Vue from 'vue'
import VueRouter from 'vue-router'
import User from '../views/User.vue'
import Find from '../views/Find.vue'
import Login from '../views/Login.vue'
import home from '../components/home.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: home
  },
  {
    path: '/users/:id',
    component: User
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/Find',
    component : Find
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

