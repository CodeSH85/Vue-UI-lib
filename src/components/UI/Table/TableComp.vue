<template>
  <slot>
    loading
  </slot>
  <div>
    <table>
      <thead>
        <tr>
          <slot name="header">

            <slot name="header-prepend">
            </slot>
            <th v-for="col, c in header" :key="c">
              <TableCell :data="col.title" />
            </th>
            <slot name="header-append">
            </slot>
          </slot>
        </tr>
      </thead>
      <tbody>
        <slot name="body">
          <TableRow v-for="row, r in data" :key="r" :rowData="row">
            <TableCell v-for="col, c in header" :key="c">
              <input type="text" @blur="onBlur($event, r, col.key)" :value="row[col.key]">
            </TableCell>
          </TableRow>
        </slot>
      </tbody>
      <tfoot>
        <slot name="footer">
        </slot>
      </tfoot>
    </table>
  </div>
</template>
<script setup lang="ts">

import TableCell from './TableCell.vue'
import TableRow from './TableRow.vue'
import { PropType } from 'vue'

type ColumnGroupSetting = {
  key: string;
  title: string;
}
type RowSetting = {
  [name: string]: string
}
defineProps({
  fixed: {
    type: Boolean,
    default: true
  },
  header: {
    type: Array as PropType<ColumnGroupSetting[] >
  },
  data: {
    type: Array as PropType<RowSetting[]>
  },
  query: {
    type: [Object, String] as PropType<string | object>,
    default: () => ({})
  }
})
const emit = defineEmits(['change', ''])
const onBlur = (event: FocusEvent, seq: number | string, key: string) => {
  emit('change', event.target?.value, seq, key)
  console.log(event.target?.value)
  return null
}

</script>
<style scoped>

</style>
