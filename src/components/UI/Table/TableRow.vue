<template>
  <tr>
    <slot>
      <td>{{ props.rowData }}</td>
    </slot>
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
