<template>
  <td
    v-bind="$attrs"
    :role="props.role"
  >
    <slot>
    </slot>
  </td>
</template>

<script setup lang="ts">
const props = defineProps({
  cellStyle: {
    type: String
  },
  role: {
    type: String
  }
})
console.log(props)
</script>

<style scoped lang="ts">

</style>
