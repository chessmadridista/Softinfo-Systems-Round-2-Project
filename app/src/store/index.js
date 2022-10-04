import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoading: true,
    snackbarMessage: "",
    snackbarColor: "",
    showSnackbar: false,
    news: [],
  },
  mutations: {
    START_LOADING(state) {
      state.isLoading = true;
    },
    STOP_LOADING(state) {
      state.isLoading = false;
    },
    SET_SNACKBAR_MESSAGE(state, message) {
      state.snackbarMessage = message;
    },
    SET_SNACKBAR_COLOR(state, color) {
      state.snackbarColor = color;
    },
    SET_SNACKBAR_STATE(state, showSnackbar) {
      state.showSnackbar = showSnackbar;
    },
    SET_NEWS(state, news) {
      state.news = news;
    },
  },
  actions: {
    startLoading(context) {
      context.commit('START_LOADING');
    },
    stopLoading(context) {
      context.commit('STOP_LOADING');
    },
    setSnackbarMessage(context, message) {
      context.commit('SET_SNACKBAR_MESSAGE', message);
    },
    setSnackbarColor(context, color) {
      context.commit('SET_SNACKBAR_COLOR', color);
    },
    setSnackbarState(context, showSnackbar) {
      context.commit('SET_SNACKBAR_STATE', showSnackbar);
    },
    setNews(context, news) {
      context.commit('SET_NEWS', news);
    },
  },
})
