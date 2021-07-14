<template>
  <table class="table table-striped">
    <thead>
      <tr class="table-light">
        <th v-for="(col, colIdx) in columns" :key="colIdx">{{ col }}</th>
      </tr>
    </thead>
    <tbody v-if="data.length > 0">
      <tr v-for="(row, rowIdx) in data" :key="rowIdx">
        <td v-for="(col, colIdx) in columns" :key="colIdx">{{ row[col] }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    columns: {
      type: Array,
      required: false,
      default: () => {
        return new Array();
      },
      validator: function (value) {
        return typeof value === 'object';
      },
    },
    data: {
      type: Array,
      required: false,
      default: () => {
        return new Array();
      },
    },
  },
};
</script>

<style></style>
