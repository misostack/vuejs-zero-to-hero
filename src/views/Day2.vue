<template>
  <div>
    <h1>Day2 : Component, shared Components</h1>
    <Tasks></Tasks>
  </div>
</template>

<script>
import Tasks from './task/Tasks.vue';
export default {
  components: {
    Tasks,
  },
};
</script>

<style></style>
