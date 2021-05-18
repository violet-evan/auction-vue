import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "@/views/Login";
import Register from "@/views/Register";
import Change from "@/views/Change";

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

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
