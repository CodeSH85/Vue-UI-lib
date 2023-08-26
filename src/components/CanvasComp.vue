<template>
  <div>
    test
    <canvas width="500" height="500" fillStyle="red" ref="canvas"></canvas>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue'
const canvas = ref<HTMLCanvasElement | null>()
const ctx = ref<CanvasRenderingContext2D | null>()

onMounted(() => {
  ctx.value = canvas.value?.getContext('2d') || null
  render()
})

const render = () => {
  if (!ctx.value) {
    return
  }
  ctx.value.fillStyle = 'red'
  ctx.value.fillRect(10, 10, 200, 200)
}

</script>
<style lang="scss" scoped>
</style>
