<template>
  <div class="root">
    <button @click="prev">{{ '<' }}</button>
    <span>{{ currentPage }}</span>
    <SelectComp v-model="currentPage" :items="max"/>
    <button @click="next">{{ '>' }}</button>
  </div>
</template>
<script setup lang="ts">
import SelectComp from '../select/SelectComp.vue'
import { ref } from 'vue'

const currentPage = ref<number>(1)
const max = 10

const prev = () => {
  if (currentPage.value === 1) return
  currentPage.value--
}
const next = () => {
  if (currentPage.value === max) return
  currentPage.value++
}

</script>
<style lang="scss" scoped>
.root {
  width: inherit;
  display: flex;
  justify-content: end;
}
</style>
