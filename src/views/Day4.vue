<template>
  <div class="container">
    <div class="row">
      <div class="col"><h1>Day4 : Forms, Props, Validation & Events</h1></div>
    </div>
    <div class="row">
      <div class="col">
        <div class="alert alert-danger" role="alert">
          <p>{{ 'ValidationStatus:' + v$.user.$error }}</p>
          <p v-for="error of v$.$errors" :key="error.$uid">
            <strong>{{ error.$validator }}</strong>
            <small> on property</small>
            <strong>{{ error.$property }}</strong>
            <small> says:</small>
            <strong>{{ error.$message }}</strong>
          </p>
          <p>{{ JSON.stringify(user) }}</p>
          <p>Agree : {{ agreeStatus }}</p>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Task form</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
            <div class="row">
              <div class="col">
                <textarea class="form-control" :value="JSON.stringify(v$)"></textarea>
              </div>
            </div>
            <form class="row g-3 needs-validation" @submit.prevent="_onSubmit">
              <div class="col-md-4">
                <BaseInputText
                  type="text"
                  :input$="v$.user.firstName"
                  :label="'day4.form.firstName'"
                  v-model.trim.lazy="user.firstName"
                />
              </div>
              <div class="col-md-4">
                <BaseInputText
                  type="text"
                  :input$="v$.user.lastName"
                  :label="'day4.form.lastName'"
                  v-model.trim.lazy="user.lastName"
                />
              </div>
              <div class="col-md-4">
                <BaseInputText
                  type="text"
                  :input$="v$.user.userName"
                  :label="'day4.form.userName'"
                  v-model.trim.lazy="user.userName"
                />
              </div>
              <div class="col-md-4">
                <label for="validationCustom03" class="form-label">City</label>
                <select v-model="user.cityId" class="form-select">
                  <option disabled value="">Please select one</option>
                  <option v-bind:value="city.id" v-for="(city, cityIdx) in cities" :key="cityIdx">
                    {{ city.name }}
                  </option>
                </select>
                <div class="invalid-feedback">Please provide a valid city.</div>
              </div>
              <div class="col-md-4">
                <label for="validationCustom04" class="form-label">District</label>
                <select v-model="user.districtId" class="form-select" id="validationCustom04" required>
                  <option selected disabled value="">Choose...</option>
                  <option v-for="(district, districtIdx) in districts" :key="districtIdx" :value="district.id">
                    {{ district.name }}
                  </option>
                </select>
                <div class="invalid-feedback">Please select a valid state.</div>
              </div>
              <div class="col-md-4">
                <label for="validationCustom05" class="form-label">Yard</label>
                <select v-model="user.yardId" class="form-select" id="validationCustom05" required>
                  <option selected disabled value="">Choose...</option>
                  <option v-for="(yard, yardIdx) in yards" :key="yardIdx" :value="yard.id">
                    {{ yard.name }}
                  </option>
                </select>
                <div class="invalid-feedback">Please select a valid state.</div>
              </div>
              <div class="col-md-4">
                <label for="validationCustom06" class="form-label">Languages</label>
                <v-select
                  v-model="user.languages"
                  taggable
                  multiple
                  label="translated"
                  :options="languages"
                  @search="_onSearchLanguages"
                >
                  <template slot="no-options"> Type to search the available languages </template>
                </v-select>
                <div class="invalid-feedback">Please select a valid state.</div>
              </div>
              <div class="col-md-4">
                <label for="validationCustom06" class="form-label">Phone Country Code</label>
                <v-select v-model="user.phoneCountryCode" label="name" :options="countryCodes">
                  <template slot="no-options"> No Data </template>
                  <template v-slot:option="option">
                    <div v-html="option.name + '(' + option.value + ')'" style="padding: 2px 0"></div>
                  </template>
                  <template v-slot:selected-option="option">
                    <div v-html="option.name + '(' + option.value + ')'"></div>
                  </template>
                </v-select>
                <div class="invalid-feedback">Please select a valid country code.</div>
              </div>
              <div class="col-md-4">
                <label for="validationCustomUserPhoneNumber" class="form-label">Phone Number</label>
                <div class="input-group">
                  <input
                    type="text"
                    class="form-control"
                    id="validationCustomUserPhoneNumber"
                    v-model.trim.lazy="user.phoneNumber"
                    aria-describedby="inputGroupPrepend"
                  />
                  <div class="invalid-feedback">Please enter phone number.</div>
                </div>
              </div>
              <div class="col-12">
                <BaseInputText
                  type="text"
                  :input$="v$.user.address"
                  :label="'day4.form.address'"
                  v-model.trim.lazy="user.address"
                />
              </div>
              <div class="col-12">
                <div class="form-check">
                  <input v-model="agreeStatus" class="form-check-input" type="checkbox" value="" id="invalidCheck" />
                  <label class="form-check-label" for="invalidCheck"> Agree to terms and conditions </label>
                  <div class="invalid-feedback">You must agree before submitting.</div>
                </div>
              </div>
              <div class="col-12">
                <button class="btn btn-primary" type="submit">Submit form</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Api } from '../services';
import { mapActions } from 'vuex';
import _ from 'lodash';
import useVuelidate from '@vuelidate/core';
import { required } from '@vuelidate/validators';

export default {
  name: 'Day4Page',
  setup: () => ({ v$: useVuelidate() }),
  validations() {
    return {
      user: {
        firstName: { required },
        lastName: { required },
        userName: { required },
        cityId: { required },
        districtId: { required },
        yardId: { required },
        address: { required },
        languages: {},
        phoneCountryCode: { required },
        phoneNumber: { required },
      },
    };
  },
  created: async function () {
    // call api
    this._prepareData();
  },
  mounted: function () {},
  watch: {
    'user.cityId': {
      handler: '_cityChanges',
      immediate: true,
    },
    'user.districtId': {
      handler: '_districtChanges',
      immediate: true,
    },
  },
  data: function () {
    return {
      cities: [],
      districts: [],
      yards: [],
      countryCodes: [],
      languages: [],
      user: {
        firstName: '',
        lastName: '',
        userName: '',
        cityId: '79',
        districtId: '770',
        yardId: '27139',
        address: '',
        languages: [],
        phoneCountryCode: '',
        phoneNumber: '',
      },
      agreeStatus: false,
    };
  },
  // methods
  methods: {
    ...mapActions('app', ['showLoading', 'hideLoading']),
    _onSubmit: async function () {
      // e.preventDefault();
      this.v$.$touch();
      if (this.v$.$error) return;
      alert(JSON.stringify(this.user));
    },
    _cityChanges: async function (val) {
      this.showLoading();
      await this._fetchDistricts(val);
      // hide
      setTimeout(() => {
        this.hideLoading();
      }, 500);
    },
    _districtChanges: async function (val) {
      this.showLoading();
      await this._fetchYards(val);
      // hide
      setTimeout(() => {
        this.hideLoading();
      }, 500);
    },
    _fetchCities: async function () {
      const { res, err } = await Api.get('/cities');
      if (err) {
        console.error(err);
        return;
      }
      if (res) {
        this.cities = res;
      }
    },
    _fetchDistricts: async function (city) {
      const { res, err } = await Api.get('/districts', {
        city,
      });
      if (err) {
        console.error(err);
        return;
      }
      if (res) {
        this.districts = res;
      }
    },
    _fetchYards: async function (city, district) {
      const { res, err } = await Api.get('/yards', {
        city,
        district,
      });
      if (err) {
        console.error(err);
        return;
      }
      if (res) {
        this.yards = res;
      }
    },
    _fetchCountryCodes: async function () {
      const { res, err } = await Api.get('/countrycodes');
      if (err) {
        console.error(err);
        return;
      }
      if (res) {
        this.countryCodes = res;
      }
    },
    _prepareData: async function () {
      const { cityId, districtId } = this.user;
      this.showLoading();

      // start fetching data
      await this._fetchCities();
      await this._fetchCountryCodes();

      if (cityId) {
        await this._fetchDistricts(cityId);
      }
      if (cityId && districtId) {
        await this._fetchYards(cityId, districtId);
      }
      // hide
      this.hideLoading();
    },
    _searchLanguage: _.debounce((loading, search, vm) => {
      console.log('search', search);
      Api.get('/languages', {
        q: `${escape(search)}`,
      })
        .then(({ res, err }) => {
          if (err) {
            return console.error(err);
          }
          // else
          vm.languages = res;
          // hide loading
          loading(false);
        })
        .catch((err) => console.error(err));
    }, 350),
    _onSearchLanguages(search, loading) {
      if (search.length) {
        loading(true);
        this._searchLanguage(loading, search, this);
      }
    },
  },
};
</script>

<style></style>
