<template>
  <div class="container">
    <div class="row">
      <div class="col-12"><h1>Day9 : Vue in Depth</h1></div>
      <div class="col-9">
        <h3>Todolist</h3>
        <p>
          <button class="btn btn-primary" v-on:click="loadTasks">Load</button>
        </p>
        <p>{{ tasks }}</p>
        <task-list :columns="['id', 'name', 'status', 'pomodoros', 'category']" :data="tasks"></task-list>
      </div>
      <div class="col-3">
        <h4>Full example to manage todolist:</h4>
        <ol>
          <li>Table view, filter, redux</li>
          <li>Creation</li>
          <li>Update</li>
          <li>Change status</li>
          <li>Delete</li>
        </ol>
        <h4>Todo steps</h4>
        <ol>
          <li>JSON Schema</li>
          <li>Define State</li>
          <li>Define Actions, Mutations</li>
          <li>Create table: columns, rows</li>
          <li>Create form: Create/Update</li>
          <li>Create pagination</li>
          <li>Create filters</li>
          <li>Handle pagination & filters change</li>
        </ol>
        <h4>References</h4>
        <ul>
          <li>
            Reactivity( changes detection ) : https://vuejs.org/v2/guide/reactivity.html
            https://vuejs.org/v2/api/#vm-forceUpdate
          </li>
          <li>Security : https://vuejs.org/v2/guide/security.html</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import TaskList from './day9/TaskList.vue';
import { mapState } from 'vuex';
export default {
  components: {
    TaskList,
  },
  computed: {
    ...mapState('task', ['tasks']),
  },
  methods: {
    loadTasks() {
      console.error('load tasks');
      // this.tasks = taskResponses.items;
      // this.$store.commit('task/tasksLoaded', { tasks: taskResponses.items });
      this.$store.dispatch('task/FETCH_TASK', {
        filters: { status: '', categories: [] },
      });
    },
  },
  data: function () {
    return {};
  },
};
</script>

<style></style>
