<template>
  <div>
    <ul>
      <li v-for="tool in props.toolOptions" :key="tool.key">
        {{ tool.title }}
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
import { toolbarProps } from './toolbar.ts'
defineOptions({
  name: 'ToolbarComp'
})
const props = defineProps(toolbarProps)
</script>

<style lang="scss" scoped>

</style>
