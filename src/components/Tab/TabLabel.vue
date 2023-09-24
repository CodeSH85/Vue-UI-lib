<template>
  <div @click="setTab('test')">
    fff, modelValue: {{ modelValue }}
  </div>
</template>
<script setup lang="ts">

import { PropType } from 'vue'

type TabItem = {
  key: string,
  [items: string]: unknown
}

defineProps({
  modelValue: {
    type: [String, Number] as PropType<string | number>,
    default: 'a'
  },
  tabItems: {
    type: Array as PropType<TabItem[]>
  }
})

const emit = defineEmits(['update:modelValue'])

const setTab = (value: string) => {
  console.log(value)
  emit('update:modelValue', value)
}
</script>

<style scoped lang="scss">

</style>
