import Vue from 'vue'
import Vuex from 'vuex'
import t_project from './module/t_project.js'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins:[createPersistedState()],
  state: {
    token: '',
    userInfo: ''
  },
  mutations: {
    // set data
    // 保存拿到的 token
    SET_TOKEN: (state, token) => {
      state.token = token;
      localStorage.setItem("token", token);
    },

    // 保存拿到的用户信息
    SET_USERINFO: (state, userInfo) => {
      state.userInfo = userInfo;
      sessionStorage.setItem("userInfo", JSON.stringify(userInfo));
    },

    // 重置 token 和用户信息
    REMOVE_INFO: state => {
      state.token = '';
      state.userInfo = '';
      localStorage.removeItem("token");
      sessionStorage.removeItem("userInfo");
    }

  },
  getters: {
    // get data
    // 获取 token
    getToken: state => {
      return state.token;
    },

    // 获取 userInfo
    getUserInfo: state => {
      return state.userInfo;
    }
  },
  actions: {

  },
  modules: {
    t_project
  }
})
