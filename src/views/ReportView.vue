<template>
  <!-- <div> -->
    <TabGroups v-model="tab"></TabGroups>
    <TabContents v-model="tab" :tab-Items="tabItems">
    </TabContents>
  <!-- </div> -->
</template>

<script setup lang="ts">
import TabGroups from '../components/Tab/TabGroups.vue'
import TabContents from '../components/Tab/TabContents.vue'
import { ref, watch } from 'vue'
const tab = ref('')
const tabItems = ref([
  { title: 'Tab A', key: 'a' },
  { title: 'Tab B', key: 'b' },
  { title: 'Tab C', key: 'c' },
  { title: 'Tab D', key: 'd' },
  { title: 'Tab E', key: 'e' }
])
watch(tab, (val) => {
  console.log(val)
})
</script>

<style scoped lang="scss">
</style>
