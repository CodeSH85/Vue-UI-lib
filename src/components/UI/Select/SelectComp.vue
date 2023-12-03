<template>
  <select
    v-model="selectedValue"
  >
    <template v-for="item, i in items" :key="i">
      <option :value="item.value ?? item">
        {{ item.title ?? item.value ?? item }}
      </option>
    </template>
  </select>
</template>
<script setup lang="ts">
import { ref, watch } from 'vue'
import { selectProps } from './select.ts'
defineOptions({
  name: 'SelectComp'
})
const props = defineProps({
  ...selectProps,
  modelValue: {
    type: [String, Number]
  }
})
const emit = defineEmits(['update:modelValue'])
const selectedValue = ref(props.modelValue)

watch(() => props.modelValue, (val) => {
  selectedValue.value = val
})

watch(selectedValue, (val) => {
  emit('update:modelValue', val)
})

</script>

<style scoped lang="scss">

</style>
