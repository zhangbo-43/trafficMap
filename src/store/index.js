import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    d3DataList: ['11', '222']
  },
  mutations: {
    // 用户信息
    d3Datas(state, val) {
      console.log(val)
      state.d3DataList = val;
      // this.$store.commit('d3Datas',this.d3Data.dataset.nodes)
    },
  },
  actions: {
  },
  modules: {
  }
})
