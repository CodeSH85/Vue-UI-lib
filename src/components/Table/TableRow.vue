<template>
  <tr>
    <slot>
      <TableCell v-for="col, i in colData" :key="i" :data="rowData" :col="col" />
    </slot>
  </tr>
</template>

<script setup lang="ts">
import TableCell from './TableCell.vue'
defineProps({
  rowData: {
    type: Object
  },
  colData: {
    type: Array
  }
})

</script>

<style lang="scss" scoped>

</style>
