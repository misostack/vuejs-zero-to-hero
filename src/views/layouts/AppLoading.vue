<template>
  <div class="vld-parent">
    <loading
      :active.sync="isLoading"
      :can-cancel="true"
      :is-full-page="fullPage"
    ></loading>
  </div>
</template>

<script>
// Import component
import Loading from 'vue-loading-overlay';
// Import stylesheet
import 'vue-loading-overlay/dist/vue-loading.css';

export default {
  computed: {
    isLoading: {
      get: function () {
        return this.$store.state.app.isLoading;
      },
      set: function (val) {
        this.$store.state.app.isLoading = val;
      },
    },
  },
  methods: {},
  data() {
    return {
      fullPage: true,
    };
  },
  components: {
    Loading,
  },
};
</script>

<style></style>
