<template>
  <td
    v-bind="$attrs"
  >
    <slot>
      <span>
        {{ data[col.key] }}
      </span>
    </slot>
  </td>
</template>

<script setup lang="ts">
defineProps({
  cellStyle: {
    type: String
  },
  data: {
    type: Object
  },
  col: {
    type: Object
  }
})
</script>

<style scoped lang="ts">

</style>
