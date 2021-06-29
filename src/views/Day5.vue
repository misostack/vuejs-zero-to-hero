<template>
  <div class="container">
    <div class="row">
      <div class="col-12"><h1>Day5</h1></div>
      <div class="col-12">
        {{ JSON.stringify(filters) }}
      </div>
      <div class="col-12">
        <DayFilter
          :placeHolder="$t('search.placeholder')"
          :cities="cities"
          v-model="filters"
          v-on:filter-change="filterChange"
        />
      </div>
    </div>
  </div>
</template>

<script>
import DayFilter from './day5/DayFilter.vue';
import { Api } from '../services/api';
export default {
  components: {
    DayFilter,
  },
  created: async function () {
    const { res, err } = await Api.get('/cities');
    if (err) {
      alert(err);
    }
    this.cities = res;
  },
  data: function () {
    return {
      cities: [],
      filters: {},
    };
  },
  methods: {
    filterChange: function (filterValues) {
      this.filters = filterValues;
    },
  },
};
</script>

<style></style>
