<template>
  <SpreadSheet :headers="columns" :data="data">
  </SpreadSheet>
  {{ data[0] }}
</template>
<script setup lang="ts">
import SpreadSheet from '../components/SpreadSheet/SpreadSheet.vue'
import { reactive } from 'vue'
const columns = reactive([
  {
    key: 'a',
    title: 'A'
  },
  {
    key: 'b',
    title: 'B'
  },
  {
    key: 'c',
    title: 'C'
  },
  {
    key: 'd',
    title: 'D'
  },
  {
    key: 'e',
    title: 'E'
  },
  {
    key: 'f',
    title: 'F'
  }
])

const data = reactive([
  {
    a: '',
    b: '',
    c: '',
    d: '',
    e: '',
    f: ''
  },
  {
    a: '',
    b: '',
    c: '',
    d: '',
    e: '',
    f: ''
  },
  {
    a: '',
    b: '',
    c: '',
    d: '',
    e: '',
    f: ''
  },
  {
    a: '',
    b: '',
    c: '',
    d: '',
    e: '',
    f: ''
  },
  {
    a: '',
    b: '',
    c: '',
    d: '',
    e: '',
    f: ''
  },
  {
    a: '',
    b: '',
    c: '',
    d: '',
    e: '',
    f: ''
  }
])

// type inputValue = string | number | null | boolean

// function updateVal (val: inputValue, index: string | number, key: string) {
//   data[index][key] = val
// }

</script>
<style lang="scss" scoped>

</style>
