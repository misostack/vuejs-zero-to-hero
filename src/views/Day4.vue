<template>
  <div class="container">
    <div class="row">
      <div class="col"><h1>Day4 : Forms, Props, Validation & Events</h1></div>
    </div>
    <div class="row">
      <div class="col">
        <div class="alert alert-primary" role="alert">
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
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <form class="row g-3 needs-validation" novalidate>
              <div class="col-md-4">
                <label for="validationCustom01" class="form-label"
                  >First name</label
                >
                <input
                  type="text"
                  class="form-control"
                  id="validationCustom01"
                  v-model.trim.lazy="user.firstName"
                  required
                />
                <div class="valid-feedback">Looks good!</div>
              </div>
              <div class="col-md-4">
                <label for="validationCustom02" class="form-label"
                  >Last name</label
                >
                <input
                  type="text"
                  class="form-control"
                  id="validationCustom02"
                  v-model.trim.lazy="user.lastName"
                  required
                />
                <div class="valid-feedback">Looks good!</div>
              </div>
              <div class="col-md-4">
                <label for="validationCustomUsername" class="form-label"
                  >Username</label
                >
                <div class="input-group">
                  <span class="input-group-text" id="inputGroupPrepend">@</span>
                  <input
                    type="text"
                    class="form-control"
                    id="validationCustomUsername"
                    v-model.trim.lazy="user.username"
                    aria-describedby="inputGroupPrepend"
                    required
                  />
                  <div class="invalid-feedback">Please choose a username.</div>
                </div>
              </div>
              <div class="col-md-4">
                <label for="validationCustom03" class="form-label">City</label>
                <select v-model="user.cityId" class="form-select">
                  <option disabled value="">Please select one</option>
                  <option
                    v-bind:value="city.id"
                    v-for="(city, cityIdx) in cities"
                    :key="cityIdx"
                  >
                    {{ city.name }}
                  </option>
                </select>
                <div class="invalid-feedback">Please provide a valid city.</div>
              </div>
              <div class="col-md-4">
                <label for="validationCustom04" class="form-label">State</label>
                <select class="form-select" id="validationCustom04" required>
                  <option selected disabled value="">Choose...</option>
                  <option>...</option>
                </select>
                <div class="invalid-feedback">Please select a valid state.</div>
              </div>
              <div class="col-md-4">
                <label for="validationCustom05" class="form-label">Zip</label>
                <input
                  type="text"
                  class="form-control"
                  id="validationCustom05"
                  required
                />
                <div class="invalid-feedback">Please provide a valid zip.</div>
              </div>
              <div class="col-12">
                <div class="form-check">
                  <input
                    v-model="agreeStatus"
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
                <button class="btn btn-primary" type="submit">
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
import { Api } from '../services';
export default {
  created: async function () {
    // call api
    this._prepareData();
  },
  mounted: function () {},
  data: function () {
    return {
      cities: [],
      user: {
        firstName: '',
        lastName: '',
        userName: '',
        cityId: '',
        districtId: '',
        yardId: '',
        address: '',
      },
      agreeStatus: false,
    };
  },
  // methods
  methods: {
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
    _prepareData: async function () {
      this._fetchCities();
    },
  },
};
</script>

<style></style>
