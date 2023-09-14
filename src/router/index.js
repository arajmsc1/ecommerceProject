import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import addCategory from '../views/category/addCategory.vue'
import addProduct from '../views/products/addProduct.vue'
import allCategory from '../views/category/allCategory.vue'
import editCategory from '../views/category/editCategory.vue'
import listProducts from '../views/category/listProducts.vue'
import editProduct from '../views/products/editProduct.vue'
import wishList from '../views/products/wishList.vue'
import allProducts from '../views/products/allProducts.vue'
import productDetails from '../views/products/productDetails.vue'
import shoppingCart from '../views/products/shoppingCart.vue'
import adminView from '../views/adminView.vue'
import signUp from '../views/signUp.vue'
import loginView from '../views/loginView.vue'
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
    path: '/admin/category/add',
    name: 'addCategory',
    component: addCategory
  },
  {
    path: '/admin/product/add',
    name: 'addProduct',
    component: addProduct
  },
  {
    path: '/admin/category',
    name: 'Category',
    component: allCategory
  },
  {
    path: '/admin/category/:id',
    name: 'editCategory',
    component: editCategory
  },
  {
    path: '/admin/product/:id',
    name: 'editProduct',
    component: editProduct
  },
  {
    path: '/admin/product',
    name: 'Product',
    component: allProducts
  },
  {
    path: '/admin',
    name: 'Admin',
    component: adminView
  },
  {
    path: '/product/show/:id',
    name: 'productDetails',
    component: productDetails
  },
  {
    path: '/category/show/:id',
    name: 'listProducts',
    component: listProducts
  },
  {
    path: '/signup',
    name: 'signup',
    component: signUp
  },
  {
    path: '/Login',
    name: 'Login',
    component: loginView
  },
  {
    path: '/wishlist',
    name: 'wishlist',
    component: wishList
  },
  {
    path: '/shoppingCart',
    name: 'shoppingCart',
    component: shoppingCart
    
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
