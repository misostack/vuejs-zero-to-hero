<template>
  <base-table>
    <template v-slot:columns>
      <th v-for="(col, colIdx) in columns" :key="colIdx">{{ $t(`task.fields.${col}`) }}</th>
    </template>
    <template v-slot:rows>
      <tr v-for="(task, rowIndex) in tasks" :key="rowIndex">
        <td v-for="(field, colIdx) in columns" :key="colIdx">
          <span v-if="field !== 'actions'">{{ task[field] }}</span>
          <div v-if="field === 'actions'">
            <EditButton @onClick="editTask(task.id)" />
          </div>
        </td>
      </tr>
    </template>
  </base-table>
</template>

<script>
import BaseTable from './BaseTable.vue';
import { EditButton } from './Buttons';
export default {
  components: { BaseTable, EditButton },
  props: {
    tasks: {
      type: Array,
      required: false,
      default: () => {
        return new Array();
      },
    },
  },
  methods: {
    editTask(id) {
      this.$router.push(`/day10/tasks/edit/${id}`);
    },
  },
  data() {
    return {
      DOMAIN_CONTEXT: 'task',
      columns: ['id', 'name', 'status', 'pomodoros', 'category', 'actions'],
    };
  },
};
</script>

<style lang="scss" scoped></style>
