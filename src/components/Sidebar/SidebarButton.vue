<template>
  <button>
    {{ props.title }}
    <i data-feather="home"></i>
  </button>
</template>
<script setup lang="ts">
import feather from 'feather-icons'

feather.replace()
const props = defineProps(['title', 'isSub'])
</script>
<style scoped>
</style>
