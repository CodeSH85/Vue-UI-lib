<template>
  <button>
    {{ props.title }}
  </button>
</template>
<script setup lang="ts">
const props = defineProps(['title', 'isSub'])

</script>
<style scoped>
</style>
