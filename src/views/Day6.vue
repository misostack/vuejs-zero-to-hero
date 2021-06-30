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
            <p v-if="customer.count">Count : {{ customer.count }}</p>

            <form class="row g-3 needs-validation" novalidate>
              <div class="col-md-4">
                <label class="form-label">City</label>
                <v-select></v-select>
              </div>
              <div class="col-md-4">
                <label for="validationCustom02" class="form-label"
                  >Last name</label
                >
                <input
                  type="text"
                  class="form-control"
                  id="validationCustom02"
                  value="Otto"
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
                    aria-describedby="inputGroupPrepend"
                    required
                  />
                  <div class="invalid-feedback">Please choose a username.</div>
                </div>
              </div>
              <div class="col-md-6">
                <label for="validationCustom03" class="form-label">City</label>
                <input
                  type="text"
                  class="form-control"
                  id="validationCustom03"
                  required
                />
                <div class="invalid-feedback">Please provide a valid city.</div>
              </div>
              <div class="col-md-3">
                <label for="validationCustom04" class="form-label">State</label>
                <select class="form-select" id="validationCustom04" required>
                  <option selected disabled value="">Choose...</option>
                  <option>...</option>
                </select>
                <div class="invalid-feedback">Please select a valid state.</div>
              </div>
              <div class="col-md-3">
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
                <button
                  class="btn btn-primary"
                  type="button"
                  v-on:click.prevent="onFetch"
                >
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
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState({
      customer: (state) => state.customer,
    }),
  },
  watch: {
    // customer: {
    //   handler: function (val, oldValue) {
    //     console.error(val, oldValue);
    //   },
    //   deep: true,
    // },
  },

  methods: {
    onFetch: function () {
      this.$store.dispatch('customer/increment', { count: 10 });
    },
  },
  data: function () {
    return {
      // cityOptions: [],
    };
  },
  created: async function () {
    this.$store.subscribe((mutation) => {
      console.error('mutation', mutation);
      this.$forceUpdate();
      // this.$forceUpdate();
    });
    // example naming
    const Lesson = { Title: 'The Home Row Keys.' };
    let obj = {
      name: 'abc',
    };
    const { Name } = obj;
    console.error(Lesson, Name);

    this.onFetch();
  },
};
</script>

<style></style>
