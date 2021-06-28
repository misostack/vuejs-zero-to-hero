<script>
export default {
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      required: true,
    },
    input$: {
      type: Object,
      required: true,
    },
  },
  computed: {
    inputListeners: function () {
      var vm = this;
      // `Object.assign` merges objects together to form a new object
      return Object.assign(
        {},
        // We add all the listeners from the parent
        this.$listeners,
        // Then we can add custom listeners or override the
        // behavior of some listeners.
        {
          // This ensures that the component works with v-model
          input: function (event) {
            vm.$emit('input', event.target.value);
          },
        },
      );
    },
  },
};
</script>

<template>
  <fragment>
    <label
      for="validationCustom01"
      class="form-label"
      v-bind:class="{
        'is-invalid': input$.$errors.length,
      }"
      >{{ $t(label) }}</label
    >
    <input
      v-bind="$attrs"
      v-on="inputListeners"
      class="form-control"
      id="validationCustom01"
      v-bind:class="{
        'is-invalid': input$.$errors.length,
      }"
    />
    <div class="invalid-feedback">
      {{ input$.$errors.length > 0 ? input$.$errors[0].$message : '' }}
    </div>
  </fragment>
</template>
