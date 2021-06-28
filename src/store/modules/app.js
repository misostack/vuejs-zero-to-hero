// initial state
const state = () => ({
  isLoading: false,
});

// getters
const getters = {};

// actions
const actions = {
  showLoading({ commit }) {
    commit('toggleLoading', { isLoading: true });
  },
  hideLoading({ commit }) {
    commit('toggleLoading', { isLoading: false });
  },
};

// mutations
const mutations = {
  toggleLoading(state, payload) {
    state.isLoading = payload.isLoading;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
