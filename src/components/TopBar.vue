<template>
  <div class="root">
    <Button @click="toggle">
      <Icon>{{ iconType }}</Icon>
    </Button>
    <Tabs v-model="selectedTabVal" :tabs="globalTabs">
      <template #append>
        <div>x</div>
      </template>
    </Tabs>
  </div>
</template>
<script setup lang="ts">
import { ref,computed } from 'vue'
import { useGlobalTabStore } from '../store/useGlobalTabStore'
import Button from './UI/Button/Button'
import Tabs from './UI/Tab/Tabs'
import Icon from './UI/Icon/Icon'

const tabStore = useGlobalTabStore()
const globalTabs = computed(() => tabStore.tabs)
const selectedTabVal = ref()

const iconType = ref('mdi-account')
function toggle() {
  console.log('click')
  iconType.value = 'mdi-clock' 
}

</script>
<style lang="scss" scoped>
.root {
  display: flex;
  align-items: center;
  background-color: $white;
}
</style>
