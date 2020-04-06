import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const Home=()=>import('../views/Home/Home')
const Profile=()=>import('../views/Profile/Profile')
const Catagory=()=>import('../views/Catagory/Catagory')
const Cart=()=>import('../views/cart/Cart')
const Detail=()=>import('../views/detail/Detail')
const routes = [
  {
    path:'',
    redirect:'/home'
  },
  {
    path:'/home',
    component:Home

  },
  {
    path:'/profile',
    component:Profile
  },
  {
    path:'/category',
    component:Catagory
  },
  {
    path:'/cart',
    component:Cart
  },
  {
    path:'/detail:iid',
    component:Detail
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
