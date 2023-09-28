<template>
  <nav class="sidebar">
    <ul class="main-module-wrapper">
      <li
        v-for="item in option" :key="item.key"
        class="btn-wrapper"
      >
        <SidebarButton
          :title="item.title"
          @click="navigateRoute(item)"
        >
        </SidebarButton>
      </li>
    </ul>
  </nav>
</template>
<script setup lang="ts">
import SIDE_BAR from './SIDE_BAR.json'
import SidebarButton from './SidebarButton.vue'
import { ref } from 'vue'
import { SidebarOption } from './type'
// import router from '../../router'
import { useTabStore } from '../../store/useTabStore'

const option = ref<SidebarOption[]>(SIDE_BAR.main_module)

const tabStore = useTabStore()

function navigateRoute (item: SidebarOption) {
  console.log(item)
  const obj = {
    id: tabStore.tabs.length + 1,
    key: item,
    componentId: item,
    title: item.title
  }
  tabStore.addTab(obj)
  // router.push(href)
}

</script>
<style lang="scss" scoped>
.sidebar {
  background: #005AA7;  /* fallback for old browsers */
  background: -webkit-linear-gradient(#b8e4d8, #aed0ed);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(#b8e4d8, #aed0ed); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  min-height: 100vh;
  min-width: 4em;
}
.btn-wrapper {
  display: flex;
  flex-direction: column;
  width: auto;
}
* + * {
  margin-top: .4em;
}
.sidebar-btn {
  padding: 1em 0.8em;
  &:hover {
    color: white;
    background-color: darken(rgba(14, 47, 178, 0.5), 50%);
  }
}
</style>
