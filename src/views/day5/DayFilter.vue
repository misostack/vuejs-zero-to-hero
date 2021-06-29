<template>
  <div class="filters">
    <div class="col-12">
      <label for="searchBox" class="form-label">Search</label>
      <input
        type="text"
        v-model="filterValues.q"
        class="form-control"
        id="searchBox"
        :placeholder="placeHolder"
        required
      />
    </div>
    <div class="col-md-3">
      <label for="validationCustom04" class="form-label">{{
        $t('DAY_FILTER.CITY.LABEL')
      }}</label>
      <select class="form-select" v-model="filterValues.city">
        <option selected disabled value="">Choose...</option>
        <option v-for="city in cities" :value="city.id" :key="city.id">
          {{ city.name }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
import { DebounceMixin } from '../../mixins';
import debounce from 'lodash/debounce';

export default {
  name: 'DayFilter',
  mixins: [DebounceMixin],
  props: {
    value: Object,
    placeHolder: String,
    cities: Array,
    districts: Array,
    yards: Array,
  },
  watch: {
    filterValues: {
      handler: function (val) {
        this._onFilterValues(val);
      },
      deep: true,
    },
  },
  methods: {
    _onFilterValues: debounce(function (val) {
      console.log('val', val);
      const { q, city } = val;
      this.$emit('input', { q, city });
      // this.$emit('filter-change', val);
    }, 500),
  },
  data: function () {
    return {
      filterValues: {
        q: '',
        city: '',
      },
    };
  },
};
</script>

<style></style>
