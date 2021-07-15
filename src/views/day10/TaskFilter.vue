<template>
  <div class="row">
    <div class="col-md-3">
      <input type="text" v-model="value.s" class="form-control" placeholder="search by task name" />
    </div>

    <div class="col-md-3">
      <select class="form-select" v-model="value.statuses" multiple="multiple">
        <option v-for="(status, sid) in ['', 'active', 'inactive']" :value="status" :key="sid">
          {{ TASK_STATUSES[status] }}
        </option>
      </select>
    </div>

    <div class="col-md-3">
      <select class="form-select" multiple="multiple">
        <option v-for="(category, cid) in categories" :value="category" :key="cid">
          {{ category }}
        </option>
      </select>
    </div>

    <div class="col-md-3">
      <button class="btn btn-success" v-on:click="goToNewTaskPage">Create new task</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    TASK_STATUSES: {
      type: Object,
      required: true,
    },
    categories: {
      type: Array,
      required: false,
      default: () => {
        return new Array();
      },
    },
    value: {
      type: Object,
      required: true,
      default: () => {
        return {
          s: '',
          statuses: [],
          categories: [],
        };
      },
    },
  },
  methods: {
    goToNewTaskPage() {
      this.$router.push('/day10/tasks/new');
    },
  },
  data() {
    return {};
  },
};
</script>

<style></style>
