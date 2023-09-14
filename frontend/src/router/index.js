import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import SingleProduct from '../components/SingleProduct.vue'

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
    path:'/Products',
    name: 'Products',
    component: () => import('../views/ProductsView.vue')
  },
  {
    path:'/singleProduct/:prodID',
    name: 'singleProduct',
    component: () => import('../views/SingleProductView.vue')
  },

  {
    path:'/Contact',
    name: 'Contact',
    component: () => import('../views/Contact.vue')
  },
  {
    path:'/admin',
    name: 'admin',
    component: () => import('../views/adminView.vue')
  },
  {
    path:'/cart',
    name: 'cart',
    component: () => import('../views/cart.vue')
  },
  {
    path:'/login',
    name: 'login',
    component: () => import('../views/login.vue')
  },
  {
    path:'/register',
    name: 'register',
    component: () => import('../views/register.vue')
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
