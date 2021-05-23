import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "@/views/Login";
import Register from "@/views/Register";
import Change from "@/views/Change";
import Index from '@/views/index'
import Detail from "@/views/Detail";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Login
  },
  { // 登录
    path: '/login',
    name: 'Login',
    component: Login
  },
  { // 注册
    path: '/register',
    name: 'Register',
    component: Register
  },
  { // 修改密码
    path: '/change',
    name: 'Change',
    component: Change
  },
  { // 主页
    path: '/index',
    name: 'Index',
    component: Index
  },
  { // 详情
    path: '/detail',
    name: 'Detail',
    component: Detail
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
