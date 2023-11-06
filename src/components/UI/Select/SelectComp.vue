<template>
  <div>
    <select
      v-model="selectedValue"
      v-bind="$attrs"
      name="" id=""
    >
      <template v-for="item, i in items" :key="i">
        <option :value="item.value ?? item">{{ item.title ?? item.value ?? item }}</option>
      </template>
    </select>
  </div>
  </template>
<script setup lang="ts">
import { ref, watch, PropType } from 'vue'
defineOptions({
  name: 'SelectComp',
  inheritAttrs: false
})
const props = defineProps({
  items: {
    type: [Array, Number]
  },
  modelValue: {
    type: [String, Number] as PropType<string | number>
  }
})
const emit = defineEmits(['update:modelValue'])
const selectedValue = ref(props.modalValue)

watch(selectedValue, (val) => {
  emit('update:modelValue', val)
})

</script>

<style scoped lang="scss">

</style>
