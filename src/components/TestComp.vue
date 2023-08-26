<template>
  <div>
    <input type="text" :value="value" @input="updateValue($event)">
    <ButtonComp>Click</ButtonComp>
  </div>
</template>

<script setup lang="ts">
import ButtonComp from './UI/ButtonComp.vue'
// import { ToRef } from 'vue'

interface Props {
  value: string
}

defineProps<Props>()
const emit = defineEmits(['updateValue'])

const updateValue = (e) => {
  emit('updateValue', e.target.value)
  return e.target.value
}

</script>

<style lang="scss" scoped>

</style>
