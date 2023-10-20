<template>
  <tr>
    <th>{{ props.header }}</th>
  </tr>
</template>

<script setup lang="ts">
const props = defineProps({
  header: {
    type: Object
  }
})
</script>

<style lang="scss" scoped>

</style>
