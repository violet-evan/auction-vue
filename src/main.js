import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// 使用 element-ui
import Element from 'element-ui'
import "element-ui/lib/theme-chalk/index.css"
Vue.use(Element)

// 使用 axios
import axios from "axios"
Vue.prototype.$axios = axios

// 使用 axios 拦截器
import './axios.js'


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
