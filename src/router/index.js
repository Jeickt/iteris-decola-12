import Vue from 'vue'
import VueRouter from 'vue-router'
import MeuHome from '../views/MeuHome.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: MeuHome,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
