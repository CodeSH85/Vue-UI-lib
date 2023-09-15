<template>
  <slot>
    loading
  </slot>
  <div >
    <table>
      <thead>
        <tr>
          <slot></slot>
          <TableCell></TableCell>
        </tr>
      </thead>
      <tbody>
        <tr>
          <slot></slot>
          <TableCell></TableCell>
        </tr>
      </tbody>
      <tfoot>
      </tfoot>
    </table>
  </div>
</template>
<script setup lang="ts">
import TableCell from './TableCell.vue'
import { PropType } from 'vue'

type ColumnGroupSetting = {
  header: string;
}
type RowSetting = {
  row: string
}
defineProps({
  fixed: {
    type: Boolean,
    default: true
  },
  Headers: {
    type: Array as PropType<ColumnGroupSetting[] >
  },
  Data: {
    type: Array as PropType<RowSetting[]>
  },
  query: {
    type: [Object, String] as PropType<string | object>,
    default: () => ({})
  }
})

</script>
<style scoped>

</style>
