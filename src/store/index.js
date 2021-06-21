import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  isLoggedIn: false,
  user: null,
};

export default new Vuex.Store({
  state,
  mutations: {},
  actions: {},
  modules: {},
});
