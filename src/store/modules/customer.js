// Customers Store
import Vue from 'vue';
import { Api } from '../../services/api';
import axios from 'axios';
const states = () => ({
  count: 0,
  cities: [],
  districts: [],
  yards: [],
});
const getters = {
  // getCityById: (state, id) => {
  //   return state.cities.find((city) => city.id === id);
  // },
  // getDistrictById: (state, id) => {
  //   return state.districts.find((district) => district.id === id);
  // },
  // getYardById: (state, id) => {
  //   return state.yards.find((yard) => yard.id === id);
  // },
  cityOptions: (state) => {
    const { cities } = state;
    return cities
      ? cities.map((city) => {
          return { value: city.id, label: city.name };
        })
      : [];
  },
  districtOptions: (state) => {
    const { districts } = state;
    return districts
      ? districts.map((district) => {
          return { value: district.id, label: district.name };
        })
      : [];
  },
  yardOptions: (state) => {
    const { yards } = state;
    return yards
      ? state.yards.map((yard) => {
          return {
            value: yard.id,
            label: yard.name,
          };
        })
      : [];
  },
};

const mutations = {
  increment(state, payload) {
    // `state` is the local module state
    state.count = payload.count;
  },

  setCities(state, { cities }) {
    // basically without side effect just : state.cities = cities;
    // trick for Vue2
    Vue.set(state, 'cities', cities);
  },

  setDistricts(state, { districts }) {
    Vue.set(state, 'districts', districts);
  },

  setYards(state, { yards }) {
    Vue.set(state, 'yards', yards);
  },
};
const actions = {
  async increment({ dispatch }) {
    // console.error('actions', 'increment', payload);
    // dispatch('setCount', { count: Math.floor(Math.random() * 100) });
    // commit('increment', payload);
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    // console.error('response', response);
    dispatch('setCount', { count: response.data.length });
    return new Promise((resolve) => {
      setTimeout(() => {
        dispatch('setCount', { count: 100 + Math.floor(Math.random() * 100) });
        resolve();
      }, 1000);
    });
  },
  setCount({ commit }, payload) {
    // console.error('actions', 'setCount', payload);
    commit('increment', payload);
  },

  async fetchCities({ commit }) {
    const { res, err } = await Api.get('/cities');

    if (err) {
      commit('setCities', { cities: [] });
    } else {
      commit('setCities', { cities: res });
    }
  },

  async fetchDistricts({ commit }, { city }) {
    const { res, err } = await Api.get('/districts', {
      city,
    });

    if (err) {
      commit('setDistricts', { districts: [] });
    } else {
      commit('setDistricts', { districts: res });
    }
  },

  async fetchYards({ commit }, { city, district }) {
    const { res, err } = await Api.get('/yards', {
      city,
      district,
    });

    if (err) {
      commit('setYards', { yards: [] });
    } else {
      commit('setYards', { yards: res });
    }
  },

  resetCities({ commit }) {
    commit('setDistricts', []);
    commit('setYards', []);
  },

  resetDistricts({ commit }) {
    commit('setYards', []);
  },
};

export default {
  namespaced: true,
  states,
  getters,
  mutations,
  actions,
};
