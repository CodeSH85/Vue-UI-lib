<template>
  <slot>
    loading
  </slot>
  <div>
    <table>
      <thead>
        <tr>
          <slot></slot>
          <th v-for="col, c in header" :key="c">
            <TableCell>
              <span>
                {{ col.title }}
              </span>
            </TableCell>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row, r in data" :key="r">
          <slot></slot>
          <TableCell v-for="col, c in header" :key="c">
            <input type="text" @blur="onBlur($event)" :value="row[col.key]">
          </TableCell>
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
const onBlur = (event: FocusEvent) => {
  console.log(event.target?.value)
  return null
}

</script>
<style scoped>

</style>
