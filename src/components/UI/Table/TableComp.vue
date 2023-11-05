<template>
  <slot>
    <div v-if="loading" class="">
      loading
    </div>
  </slot>
  <div class="table-container">
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
          <template v-for="row, r in data" :key="r">
            <TableRow :rowData="row" :colData="headers">
            </TableRow>
          </template>
        </slot>
      </tbody>
      <tfoot>
        <slot name="footer">
          <TableFooter></TableFooter>
        </slot>
      </tfoot>
    </table>
    <slot name="table-append">
      <TablePagePanel></TablePagePanel>
    </slot>
  </div>
</template>
<script setup lang="ts">

import TableHeader from './TableHeader.vue'
import TableFooter from './TableFooter.vue'
import TablePagePanel from './TablePagePanel.vue'
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
.table-container {
  width: 100%;
}
table {
  table-layout: fixed;
  border-spacing: 0;
}
</style>
