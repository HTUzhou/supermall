import Vue from 'vue'
import VueRouter from "vue-router";

const Home = () => import('../views/home/Home');
const Profile = () => import('../views/profile/Profile');
const Category = () => import('../views/category/Category');
const Cart = () => import('../views/cart/Cart');

//1、安装插件
Vue.use(VueRouter);

//路由
const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/sort',
    component: Category
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/my',
    component: Profile
  }
];

//2、创建VueRouter
const router = new VueRouter({
  routes,
  mode: 'history'
});

//3、导出router
export default router;