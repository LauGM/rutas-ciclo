import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/products',
    name: 'products',
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/ProductosView.vue')
  },
  {
    path: '/usuario/:id',
    name: 'usuario',
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/UsuarioView.vue')
  },
  {
    path: '/usuarios',
    name: 'usuarios',
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/UsuariosView.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
