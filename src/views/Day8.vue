<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h1>Day8 : Mixins,Directives,Filters: the mystery</h1>
        <ValidationObserver ref="form" v-slot="{ invalid, handleSubmit }">
          <form @submit.prevent="handleSubmit(onSave)">
            <div class="col-md-4">
              <BaseTextInput
                v-model="user.lastName"
                name="lastName"
                :DOMAIN_CONTEXT="DOMAIN_CONTEXT"
                :label="$t(`${DOMAIN_CONTEXT}.lastName`)"
                :rules="UserSchema.lastName"
              />
            </div>
            <div class="col-md-4">
              <validation-provider vid="firstName" :rules="UserSchema.firstName" v-slot="{ errors }">
                <label for="validationCustom01" class="form-label">First name</label>
                <input
                  v-model="user.firstName"
                  name="firstName"
                  :class="{ 'is-invalid': errors.length }"
                  class="form-control"
                  type="text"
                />
                <div v-if="errors.length > 0" class="invalid-feedback">
                  {{ $t(`${DOMAIN_CONTEXT}.${errors[0]}`, { min: 3, max: 10 }) }}
                </div>
              </validation-provider>
            </div>
            <div class="col-12">
              <button class="btn btn-primary" :disabled="invalid" v-on:click="onSave">Save</button>
            </div>
          </form>
        </ValidationObserver>
      </div>
    </div>
  </div>
</template>

<script>
import _ from 'lodash';
const BAD_WORDS = ['aaa', 'bbb', 'ccc'];
const user = {
  id: 1,
  firstName: 'ccc',
  lastName: 'Form',
  email: 'vueform@jsguru.com',
  isActive: true,
  priority: 3,
};

const UserSchema = {
  firstName: `required|min:3|max:10|bad_words:${BAD_WORDS}`, // |custom:asyncFirstNameValidator
  lastName: {
    required: true,
    min: { length: 3 },
    max: { length: 10 },
    // custom: {
    //   name: 'asyncFirstNameValidator',
    // },
  },
};
export default {
  computed: {
    BAD_WORDS: function () {
      return ['aaa', 'bbb', 'ccc'];
    },
    DOMAIN_CONTEXT: function () {
      return 'example.user';
    },
  },
  watch: {
    'user.lastName': {
      handler: '_lastNameChanges',
      immediate: true,
    },
  },
  methods: {
    _lastNameCheck: _.debounce(async (value, form) => {
      const fakePromise = new Promise((resolve) => {
        setTimeout(() => {
          resolve({ isValid: value !== 'abcdef', error: 'lastName.duplicated' });
        }, 500);
      });
      try {
        let { isValid, error } = await Promise.resolve(fakePromise);
        if (!isValid && form) {
          form.setErrors({
            lastName: [error],
          });
        }
      } catch (error) {
        console.error(error);
      }
    }, 500),
    _lastNameChanges(value) {
      // check in server
      this._lastNameCheck(value, this.$refs.form);
    },
    onSave() {
      this.$refs.form.validate().then((success) => {
        if (!success) {
          this.$myAlert('Invalid input');
        }
        this.$refs.form.setErrors({
          firstName: ['tadata'],
        });
      });
    },
  },
  data: function () {
    return {
      user,
      UserSchema,
    };
  },
};
</script>

<style></style>
