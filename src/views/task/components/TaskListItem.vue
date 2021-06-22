<template>
  <fragment>
    <tr>
      <td>{{ id || '' }}</td>
      <td>{{ description }}</td>
      <td>{{ status }}</td>
      <td>Actions</td>
    </tr>
  </fragment>
</template>

<script>
export default {
  // ignore attribute : https://vuejs.org/v2/guide/components-props.html#Prop-Validation
  inheritAttrs: false,
  props: {
    id: {
      type: Number,
      required: true,
      default: 0,
    },
    description: {
      type: String,
      required: true,
      default: '',
    },
    status: {
      type: String,
      required: true,
      default: 'pending',
      validator: function (value) {
        return ['pending', 'inprogress', 'done'].includes(value);
      },
    },
  },
  computed: {
    taskListItemTitle() {
      return 'Task list item title <strong>1</strong>';
    },
  },
};
</script>

<style></style>
