<template>
  <div id="page-tasks">
    <h4>Edit task {{ id }}</h4>
    <p v-if="err" class="error">{{ $t(err) }}</p>
    <form v-if="task">
      {{ JSON.stringify(task) }}
    </form>
  </div>
</template>

<script>
import TaskSchema from '../../../schemas/todolist.json';
const getTask = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const task = TaskSchema.items.find((task) => task.id === id);
      resolve(task ? { err: null, task } : { err: 'not_found', task: null });
    }, 300);
  });
};
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      err: null,
      task: null,
    };
  },
  beforeRouteEnter(to, from, next) {
    try {
      getTask(to.params.id).then(({ err, task }) => {
        next((vm) => {
          vm.task = task;
          vm.err = err;
        });
      });
    } catch (error) {
      console.error(error);
    }
  },
};
console.error('dataaasda');
</script>

<style></style>
