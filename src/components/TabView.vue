<template>
  <div>
    <div class="tab-wrapper">
      <div class="tab" v-for="tab, t in tabs" :key="t">
        <span @click="setTab(tab.key)">{{ tab.title }}</span>
      </div>
    </div>
    <div class="tab-item">
      <slot>
        <div class="" v-for="items, i in tabItems" :key="i">
          <div v-if="currentTab === items.key" class="">
            {{ items.title }}
          </div>
        </div>
      </slot>
    </div>
  </div>
</template>
<script setup lang="ts">

import { ref } from 'vue'

const currentTab = ref<string | number>()
const tabs = ref([
  { title: 'Tab A', key: 'a' },
  { title: 'Tab B', key: 'b' },
  { title: 'Tab C', key: 'c' },
  { title: 'Tab D', key: 'd' },
  { title: 'Tab E', key: 'e' }
])
const tabItems = ref([
  { title: 'Tab A', key: 'a' },
  { title: 'Tab B', key: 'b' },
  { title: 'Tab C', key: 'c' },
  { title: 'Tab D', key: 'd' },
  { title: 'Tab E', key: 'e' }
])
function setTab (key: string) {
  currentTab.value = key
  console.log(currentTab.value)
}

</script>

<style lang="scss" scoped>
.tab-wrapper {
  display: flex;
}
</style>
