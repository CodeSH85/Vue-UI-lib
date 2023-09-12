<template>
  <div class="side-panel">
    <button></button>
    Side Panel
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  mode: {
    type: String
  }
})
const mode = props.string
console.log(mode)
</script>

<style scoped>
.side-panel {
  position: absolute;
  right: 0;
}
</style>
