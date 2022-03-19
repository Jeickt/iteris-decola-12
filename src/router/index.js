import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../views/HomePage.vue'
import ListaBlocos from '../views/ListaBlocos.vue'
import ProductPage from '../views/ProductPage.vue'
import CadastroDeUsuario from '../views/CadastroDeUsuario.vue'
import HappyPassport from '../views/HappyPassport.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
  },
  {
    path: '/ListaBlocos/',
    name: 'ListaBlocos',
    component: ListaBlocos,
  },
  {
    path: '/ProductPage/:name',
    name: 'ProductPage',
    component: ProductPage,
    props: true,
  },
  {
    path: '/CadastroDeUsuario',
    name: 'CadastroDeUsuario',
    component: CadastroDeUsuario,
  },
  {
    path: '/HappyPassport',
    name: 'HappyPassport',
    component: HappyPassport,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
