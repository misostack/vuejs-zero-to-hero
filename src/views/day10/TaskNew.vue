<template>
  <div id="page-tasks">
    <h4>New task</h4>
    <form class="row g-3">
      <div class="col-12">
        <button class="btn btn-primary" type="submit">Submit form</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
