import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    d3DataList: []
  },
  mutations: {
    // 大屏数据信息
    changeD3Datas(state, val) {
      console.log(val)
      state.d3DataList = val;
    },
  },
  actions: {
  },
  modules: {
  }
})
