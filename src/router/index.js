import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Signup from '../views/Signup.vue'
import Login from '../views/Login.vue'
import AdminDashboard from '../views/AdminDashboard'
import UserDashbaord from '../views/UserDashboard'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    props: true
  },
  {
    path: '/admindashboard',
    name: 'AdminDashboard',
    component: AdminDashboard
  },
  {
    path:'/userdashboard',
    name:'UserDashboard',
    component: UserDashbaord
  }
]

const router = new VueRouter({
  routes
})

export default router
