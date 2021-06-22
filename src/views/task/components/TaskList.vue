<template>
  <fragment>
    <h1 v-html="taskListTitle"></h1>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Description</th>
          <th scope="col">Status</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        <task-list-item
          v-for="(item, idx) in items"
          :key="idx"
          :id="idx + 1"
          :description="item.description"
          :status="item.status"
        />
      </tbody>
    </table>
  </fragment>
</template>

<script>
import TaskListItem from './TaskListItem.vue';

export default {
  components: { TaskListItem },
  props: {
    items: {
      type: Array,
      required: false,
      default: new Array(),
      validator: function (value) {
        if (!value || value.length == 0) return true;
        // else validate schema for item
      },
    },
  },
  computed: {
    taskListTitle() {
      return 'Task list item title <strong>1</strong>';
    },
  },
};
</script>

<style></style>
