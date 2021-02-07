import Vue from 'vue'
import VueRouter from 'vue-router'
import User from '../views/User.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/social/src/views/User.vue',
    component: User
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router