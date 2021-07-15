<template>
  <div id="page-tasks">
    <h4>Manage tasks</h4>
    {{ filter }}
    {{ tasks.length }}
    <task-filter
      class="mb-4"
      v-if="isReady"
      :TASK_STATUSES="TASK_STATUSES"
      v-model="filter"
      :categories="categories"
    ></task-filter>
    <task-list class="mb-4" :tasks="tasks"></task-list>
  </div>
</template>

<script>
import _ from 'lodash';
import TaskSchema from '../../../schemas/todolist.json';
import TaskFilter from './TaskFilter.vue';
import TaskList from './TaskList.vue';
export default {
  components: { TaskFilter, TaskList },
  async created() {
    console.error('preloading required data');
    // load required data
    this.categories = await this.fetchCategories();
    this.isReady = true;
    // load task list
    this.fetchTasks();
  },
  watch: {
    filter: {
      handler: function (filterVal) {
        this.dispatchFilterChange(filterVal, this);
      },
      deep: true,
    },
  },
  methods: {
    async fetchCategories() {
      const fakeApiRequest = new Promise((resolve) => {
        setTimeout(() => {
          resolve(TaskSchema.categories);
        }, 300);
      });
      const categories = await Promise.resolve(fakeApiRequest);
      console.error('categories', categories);
      return categories;
    },
    fetchTasks(filter = {}) {
      console.error('finding task with filter', filter);
      this.showLoading();
      setTimeout(() => {
        const fakeApiRequest = new Promise((resolve) => {
          setTimeout(() => {
            resolve(TaskSchema.items);
          }, 300);
        });
        fakeApiRequest.then((tasks) => (this.tasks = tasks));
        this.hideLoading();
      }, 500);
    },
    dispatchFilterChange: _.debounce((filterVal, vm) => {
      // do something with api call
      console.error('filterChanges', filterVal);
      vm.fetchTasks();
    }, 300),
  },
  data() {
    return {
      isReady: false,
      tasks: [],
      filter: {
        s: '',
        statuses: [],
        categories: [],
      },
      TASK_STATUSES: {
        '': this.$t('task.status_enum.all'),
        active: this.$t('task.status_enum.active'),
        inactive: this.$t('task.status_enum.inactive'),
      },
    };
  },
};
</script>

<style></style>
