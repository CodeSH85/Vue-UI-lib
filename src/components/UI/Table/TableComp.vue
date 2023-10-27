<template>
  <slot>
    <div
      v-if="loading"
      class=""
    >
      loading
    </div>
  </slot>
  <div>
    <table>
      <thead>
        <TableHeader
          :headers="headers"
          @setActiveHeader="setActiveHeader"
          @dropHeader="handleDrop"
        >
        </TableHeader>
      </thead>
      <tbody>
        <slot name="body">
          <TableRow v-for="row, r in data" :key="r" :rowData="row">
            <TableCell v-for="col, c in headers" :key="c">
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
import TableHeader from './TableHeader.vue'
import TableRow from './TableRow.vue'
import { PropType, ref } from 'vue'

type ColumnGroupSetting = {
  key: string;
  title: string;
}
type RowSetting = {
  [name: string]: string
}
const props = defineProps({
  fixed: {
    type: Boolean,
    default: true
  },
  headers: {
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
const emit = defineEmits([
  'change',
  'setActiveHeader',
  'updateCol'
])
const onBlur = (event: FocusEvent, seq: number | string, key: string) => {
  emit('change', event.target?.value, seq, key)
  console.log(event.target?.value)
  return null
}
const loading = ref<boolean>(false)

const setActiveHeader = (key: string) => {
  emit('setActiveHeader', key)
}

const handleDrop = (cols: object) => {
  dndHeader(cols)
}

const dndHeader = (cols: object) => {
  const { targetCol, draggingCol } = cols
  const dropColModel = props.headers

  const draggingColIndex = dropColModel.findIndex(item => item.key === draggingCol.key)
  const targetColIndex = targetCol ? dropColModel.findIndex(item => item.key === targetCol.key) : dropColModel.length - 1

  if (draggingColIndex === -1) {
    // DnD new column
    dropColModel.splice(targetColIndex + 1, 0, draggingCol)
  } else if (targetCol) {
    // Swap
    dropColModel[targetColIndex] = draggingCol
    dropColModel[draggingColIndex] = targetCol
  }
  emit('updateCol', dropColModel)
}

</script>
<style lang="scss" scoped>
table {
  border-spacing: 0;
}
</style>
