import Vue from 'vue';
import Vuex from 'vuex';

import app from './modules/app';
import customer from './modules/customer';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

// const state = {
//   isLoggedIn: false,
//   user: null,
// };

export default new Vuex.Store({
  modules: {
    app,
    customer,
  },
  strict: debug,
  // state,
  // mutations: {},
  // actions: {},
  // modules: {},
});
