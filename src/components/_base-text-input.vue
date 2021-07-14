<template>
  <ValidationProvider tag="div" :rules="rules" :name="name" :vid="vid" v-slot="{ errors }">
    <label for="validationCustom01" class="form-label">{{ label }}</label>
    <input
      name="firstName"
      :class="{ 'is-invalid': errors.length }"
      class="form-control"
      :type="type"
      v-model="currentValue"
    />
    <div v-if="errors.length > 0" class="invalid-feedback">
      {{ $t(`${DOMAIN_CONTEXT}.${errors[0]}`, { min: 3, max: 10 }) }}
    </div>
  </ValidationProvider>
</template>

<script>
import { ValidationProvider } from 'vee-validate';

export default {
  name: 'TextInput',
  components: {
    ValidationProvider,
  },
  props: {
    DOMAIN_CONTEXT: {
      type: String,
      default: 'DOMAIN_CONTEXT',
    },
    value: {
      type: String,
      default: '',
    },
    rules: {
      type: [String, Object],
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
    vid: {
      type: String,
      default: undefined,
    },
    type: {
      type: String,
      default: 'text',
    },
  },
  data: () => ({
    currentValue: '',
  }),
  watch: {
    currentValue(val) {
      // allows us to use v-model on our input.
      this.$emit('input', val);
    },
  },
};
</script>
