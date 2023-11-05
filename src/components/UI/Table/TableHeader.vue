<template>
  <tr>
    <th
      v-for="col in headers" :key="col.key"
      draggable="true"
      @dragstart="handleDragstart(col)"
      @dragover="handleDragover"
      @drop="handleDrop(col)"
      @click="setActiveHeader(col.key)"
    >
      {{ col.title }}
    </th>
    <slot></slot>
  </tr>
</template>

<script setup lang="ts">
import { ref } from 'vue'
defineProps({
  headers: {
    type: Object
  },
  dropHeader: {
    type: Object
  }
})

const emit = defineEmits(['setActiveHeader', 'dropHeader'])
const dragCol = ref<object>()
const handleDragstart = (col: object) => {
  dragCol.value = col
}

const handleDragover = (event: DragEvent) => {
  event.preventDefault()
}

const handleDrop = (col: object) => {
  const obj = {
    draggingCol: dragCol.value,
    targetCol: col
  }
  emit('dropHeader', obj)
}

function setActiveHeader (key: string) {
  emit('setActiveHeader', key)
}

</script>
<style lang="scss" scoped>
tr {
  background-color: $primary-color;
  color: $white
}
th {
  padding: $sm;
}
</style>
