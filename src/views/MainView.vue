<template>
  <div class="wrapper">
    <TopBar class="top-bar"></TopBar>
    <main class="container">
      <SidebarMenu />
      <section class="main-section">
        <template v-if="tabs.length">
          <TabGroup
            @close-tab="closeTab"
            v-model="tab"
            :items="storeTabs"
          >
          </TabGroup>
          <TabContent
            v-model="tab"
            :tab-Items="storeTabs"
          >
            <template #default="{ item }">
              <!-- :data="data" -->
              <Middleware
                :component-name="item.componentName"
              />
            </template>
          </TabContent>
        </template>
        <template v-else>
          default view
          <ul>
            <li>link</li>
          </ul>
        </template>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import TopBar from '../components/TopBar.vue'
import SidebarMenu from '../components/Sidebar/SidebarMenu.vue'
import TabGroup from '../components/Tab/TabGroup.vue'
import TabContent from '../components/Tab/TabContent.vue'
import { Middleware } from '../components/Middleware'
import { useTabStore } from '../store/useTabStore'
import { storeToRefs } from 'pinia'
// import { ref, shallowRef, computed } from 'vue'
import { ref, computed } from 'vue'
import { Tab } from '../components/Tab/Tab'
// import BookingData from '../../public/BookingData.json'
// console.log(BookingData)
const tab = ref('')
const tabStore = useTabStore()
// const data = shallowRef(BookingData)
const storeTabs = computed(() => {
  return tabStore.tabs
})

const { tabs } = storeToRefs(tabStore)

function closeTab (tabId: Tab['id']) {
  tabStore.closeTab(tabId)
}

</script>
<style lang="scss" scoped>
.wrapper {
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
