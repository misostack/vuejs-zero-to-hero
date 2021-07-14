import Vue from 'vue';
import axios from 'axios';
import taskResponses from '../../../schemas/todolist.json';

const states = () => ({
  tasks: [],
  filters: {
    status: '', // all
    categories: [], // all
  },
});
const getters = {};
const mutations = {
  tasksLoaded(state, { tasks }) {
    console.error(tasks);
    Vue.set(state, 'tasks', tasks);
  },
  taskAdded(state, payload) {
    state.tasks.push(payload);
    Vue.set(state, 'tasks', state.tasks);
  },
  taskDeleted(state, payload) {
    Vue.set(
      state,
      'task',
      state.tasks.filter((t) => t.id != payload.id),
    );
  },
  statusFilterChanged(state, payload) {
    Vue.set(state, 'filters', { ...state.filters, status: payload.status });
  },
  categoryFilterChanged(state, payload) {
    const { category, changeType } = payload;
    if (changeType === 'added') {
      if (state.filters.category.includes(category)) {
        return;
      }
      return Vue.set(state, 'filters', {
        ...state.filters,
        categories: state.filters.categories.concat(category),
      });
    }
    if (changeType === 'removed') {
      return Vue.set(state, 'filters', {
        ...state.filters,
        categories: state.filters.categories.filter((existingCategory) => existingCategory !== category),
      });
    }
  },
};
const actions = {
  async FETCH_TASK({ commit }, { filters }) {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    if (response) {
      console.error(filters);
      commit('tasksLoaded', { tasks: taskResponses.items });
    }
  },
};

export default {
  namespaced: true,
  states,
  getters,
  mutations,
  actions,
};
