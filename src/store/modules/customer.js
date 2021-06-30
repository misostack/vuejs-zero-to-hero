// Customers Store
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
  // cityOptions: (state) => {
  //   console.error('state', state.cities);
  //   const { cities } = state;
  //   return cities
  //     ? cities.map((city) => {
  //         return { value: city.id, label: city.name };
  //       })
  //     : [];
  // },
  // districtOptions: (state) => {
  //   const { districts } = state;
  //   return districts
  //     ? districts.map((district) => {
  //         return { value: district.id, label: district.name };
  //       })
  //     : [];
  // },
  // yardOptions: (state) => {
  //   const { yards } = state;
  //   return yards
  //     ? state.yards.map((yard) => {
  //         return {
  //           value: yard.id,
  //           label: yard.name,
  //         };
  //       })
  //     : [];
  // },
};

const mutations = {
  increment(state, payload) {
    console.error('mutation', payload);
    // `state` is the local module state
    state.count = payload.count;
  },
};
const actions = {
  async increment({ dispatch }) {
    // console.error('actions', 'increment', payload);
    // dispatch('setCount', { count: Math.floor(Math.random() * 100) });
    // commit('increment', payload);
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/posts',
    );
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
};

export default {
  namespaced: true,
  states,
  getters,
  mutations,
  actions,
};
