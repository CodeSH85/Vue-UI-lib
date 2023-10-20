<template>
  <TopBar class="top-bar"></TopBar>
  <main class="container">
    <SidebarMenu />
    <section class="main-section">
      <!-- <TabGroups v-model="tab" :items="tabItems"> -->
      <TabGroups
      @close-tab="closeTab"
      v-model="tab" :items="storeTabs">
      </TabGroups>
      <TabContents v-model="tab" :tab-Items="storeTabs">
        <template #default="{ item }">
          {{ item }}
          <MiddleWare :component-id="item.componentId"></MiddleWare>
        </template>
      </TabContents>
    </section>
  </main>
</template>

<script setup lang="ts">
import TopBar from '../components/TopBar.vue'
import SidebarMenu from '../components/Sidebar/SidebarMenu.vue'
import TabGroups from '../components/Tab/TabGroups.vue'
import TabContents from '../components/Tab/TabContents.vue'
import MiddleWare from '../components/MiddleWare.vue'
import { useTabStore } from '../store/useTabStore'
import { ref, computed } from 'vue'
import { Tab } from '../components/Tab/Tab'

const tab = ref('')

const tabStore = useTabStore()

const storeTabs = computed(() => {
  return tabStore.tabs
})

function closeTab (tabId: Tab['id']) {
  tabStore.closeTab(tabId)
}

</script>
<style lang="scss" scoped>
.container{
  display: flex;
  width: 100vw;
  background-color: #f5f5f5;
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
