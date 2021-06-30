<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h1>Day6 : Vuex - learn enough to be dangerous</h1>
      </div>
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Example form with vuex</h5>
            <form class="row g-3 needs-validation" novalidate>
              <div class="col-md-4">
                <label class="form-label">City</label>
                <v-select
                  label="label"
                  :resetOnOptionsChange="false"
                  :options="cityOptions"
                  :reduce="(item) => item.value"
                  v-model="form.city"
                ></v-select>
              </div>
              <div class="col-md-4">
                <label class="form-label">District</label>
                <v-select
                  :resetOnOptionsChange="true"
                  :options="districtOptions"
                  :reduce="(item) => item.value"
                  v-model="form.district"
                ></v-select>
              </div>
              <div class="col-md-4">
                <label class="form-label">Yards</label>
                <v-select
                  :resetOnOptionsChange="true"
                  :options="yardOptions"
                  :reduce="(item) => item.value"
                  v-model="form.yard"
                ></v-select>
              </div>
              <div class="col-md-4">
                <label for="validationCustom03" class="form-label">City</label>
                <input
                  type="text"
                  class="form-control"
                  id="validationCustom03"
                  required
                />
                <div class="invalid-feedback">Please provide a valid city.</div>
              </div>

              <div class="col-12">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="invalidCheck"
                    required
                  />
                  <label class="form-check-label" for="invalidCheck">
                    Agree to terms and conditions
                  </label>
                  <div class="invalid-feedback">
                    You must agree before submitting.
                  </div>
                </div>
              </div>
              <div class="col-12">
                <button class="btn btn-primary" type="button">
                  Submit form
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { Api } from '../services/api';
import { mapActions, mapGetters, mapState } from 'vuex';

export default {
  computed: {
    ...mapState('customer', {
      count: (state) => state.count,
    }),
    // ...mapState('customer', {
    //   cities: (state) => state.cities,
    //   count: (state) => state.count,
    // }),
    ...mapGetters('customer', [
      'cityOptions',
      'districtOptions',
      'yardOptions',
    ]),
  },
  watch: {
    'form.city': {
      handler: function (val) {
        if (val) {
          this.fetchDistricts({ city: this.form.city });
        } else {
          this.resetCities();
        }
      },
      deep: true,
    },
    'form.district': {
      handler: function (val) {
        if (val) {
          this.fetchYards({
            city: this.form.city,
            district: this.form.district,
          });
        } else {
          this.resetDistricts();
        }
      },
      deep: true,
    },
  },

  methods: {
    ...mapActions('customer', [
      'fetchCities',
      'fetchDistricts',
      'fetchYards',
      'resetCities',
      'resetDistricts',
    ]),
  },
  data: function () {
    return {
      form: {
        city: null,
        district: null,
        yard: null,
      },
    };
  },
  created: function () {
    // this.$store.subscribe((mutation) => {
    //   console.error('mutation', mutation);
    //   this.$forceUpdate();
    // });
    this.fetchCities();
  },
  mounted: function () {},
};
</script>

<style></style>
