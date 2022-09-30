import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoading: true,
  },
  mutations: {
    START_LOADING(state) {
      state.isLoading = true;
    },
    STOP_LOADING(state) {
      state.isLoading = false;
    },
  },
  actions: {
    startLoading(context) {
      context.commit('START_LOADING');
    },
    stopLoading(context) {
      context.commit('STOP_LOADING');
    },
  },
})
