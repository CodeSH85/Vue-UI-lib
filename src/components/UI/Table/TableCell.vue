<template>
  <td
    v-bind="$attrs"
  >
    <slot>
      <span>
        {{ data }}
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
    type: String || Number || Boolean || undefined,
    default: 'head'
  }
})
</script>

<style scoped lang="ts">

</style>
