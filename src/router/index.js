import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../views/HomePage.vue'
import ListaBlocos from '../views/ListaBlocos.vue'
import ProductPage from '../views/ProductPage.vue'
import CadastroDeUsuario from '../views/CadastroDeUsuario.vue'
import CompraCarrinho from '../views/CompraCarrinho.vue'
import HappyPassport from '../views/HappyPassport.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/ListaBlocos/:uf',
    name: 'ListaBlocos',
    component: ListaBlocos,
    props: true
  },
  {
    path: '/ProductPage/:name',
    name: 'ProductPage',
    component: ProductPage
  },
  {
    path: '/CadastroDeUsuario',
    name: 'CadastroDeUsuario',
    component: CadastroDeUsuario
  },
  {
    path: '/CompraCarrinho',
    name: 'CompraCarrinho',
    component: CompraCarrinho
  },
  {
    path: '/HappyPassport',
    name: 'HappyPassport',
    component: HappyPassport
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
