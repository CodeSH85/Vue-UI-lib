<template>
  <TabGroups v-model="tab" :items="tabItems">
  </TabGroups>
  <TabContents v-model="tab" :tab-Items="tabItems">
    <template #test="item">
      <div class="">{{ item }}</div>
    </template>
  </TabContents>
</template>

<script setup lang="ts">
import TabGroups from '../components/Tab/TabGroups.vue'
import TabContents from '../components/Tab/TabContents.vue'
// import TabLabel from '../components/Tab/TabLabel.vue'
import { ref } from 'vue'

const tab = ref('')
const tabItems = ref([
  { title: 'Tab A', key: 'a' },
  { title: 'Tab B', key: 'b' },
  { title: 'Tab C', key: 'c' },
  { title: 'Tab D', key: 'd' },
  { title: 'Tab E', key: 'e' }
])

</script>
<style scoped lang="scss">
</style>
