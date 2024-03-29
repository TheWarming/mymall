import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Cart = () => import('views/cart/Cart');
const Category = () => import('views/category/Category');
const Profile = () => import('views/profile/Profile');
const Home = () => import('views/home/Home');
const Detail = () => import('views/detail/Detail');

const routes = [
  {
    path:'',
    redirect:'/home'
  },
  {
    path:'/mymall',
    redirect:'/home'
  },
  {
    path:'/home',
    component:Home
  },
  {
    path:'/category',
    component:Category
  },
  {
    path:'/cart',
    component:Cart
  },
  {
    path:'/profile',
    component:Profile
  },
  {
    path:'/detail',
    component:Detail
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
