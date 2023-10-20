<template>
  <tr>
    <td>{{ props.rowData }}</td>
  </tr>
</template>

<script setup lang="ts">
const props = defineProps({
  rowData: {
    type: Object
  }
})
</script>

<style lang="scss" scoped>

</style>
