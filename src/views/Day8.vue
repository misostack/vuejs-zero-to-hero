<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h1>Day8 : Mixins,Directives,Filters: the mystery</h1>
        <ValidationObserver ref="form" v-slot="{ validate, invalid }">
          <div class="col-md-4">
            <validation-provider :rules="UserSchema.firstName" v-slot="{ errors }">
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
            {{ JSON.stringify(validate) }}
            <button class="btn btn-primary" :disabled="invalid" v-on:click="onSave">Save</button>
          </div>
        </ValidationObserver>
      </div>
    </div>
  </div>
</template>

<script>
const BAD_WORDS = ['aaa', 'bbb', 'ccc'];
const user = {
  id: 1,
  firstName: 'Vue',
  lastName: 'Form',
  email: 'vueform@jsguru.site',
  isActive: true,
  priority: 3,
};
const UserSchema = {
  firstName: `required|min:3|max:10|bad_words:${BAD_WORDS}`,
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
  methods: {
    onSave: function () {
      this.$refs.form.validate().then((success) => {
        if (!success) {
          this.$myAlert('Invalid input');
        }
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
