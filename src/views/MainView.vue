<template>
  <div class="main-view-wrapper">
    <TopBar class="top-bar"></TopBar>
    <main class="container">
      <Navbar v-model="currentModule" :items="transformedData"></Navbar>
      <section class="main-section">
        <template v-if="globalTabs.length">
          {{ currentModule }}
        </template>
        <template v-else>
          <ComponentView></ComponentView>
        </template>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import Apps_module from '../../public/App_module.json'
import TopBar from '../components/TopBar.vue'
import Navbar from '../components/UI/Navbar/Navbar'
import { NavItemType } from '../components/UI/Navbar/props'
// import DashBoardView from './DashBoardView.vue'
import ComponentView from './ComponentView.vue'
import { useGlobalTabStore } from '../store/useGlobalTabStore'
import { ref, computed, watch } from 'vue'

const tabStore = useGlobalTabStore()
const globalTabs = computed(() => tabStore.tabs)
const currentModule = ref()

watch(currentModule, (val) => {
  if (val) {
    const obj = {
      title: val.title,
      value: val.key
    }
    tabStore.addTab(obj)
  }
})

function parseModule(modules: any[]): NavItemType[] {
  return modules.map(module => {
    const { subModule, ...rest } = module
    const children = subModule ? parseModule(subModule) : undefined
    return {
      ...rest,
      children
    }
  })
}
const transformedData = parseModule(Apps_module.main_module)


</script>
<style lang="scss" scoped>
.main-view-wrapper {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.container{
  display: flex;
  width: 100vw;
  height: 100%;
  background-color: $surface-bright;
}
.main-section {
  overflow: auto;
  padding: $lg;
  flex: 1 1 auto;
  overflow-y: auto;
  overflow-x: hidden;
}
.top-bar {
  width: 100%;
  // position: fixed;
}
</style>
