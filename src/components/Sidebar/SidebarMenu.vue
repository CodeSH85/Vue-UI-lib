<template>
  <nav
    class="sidebar"
    :class="mini ? 'mini' : ''"
  >
    <ul class="main-module-wrapper">
      <li :class="(mini ? 'mini' : 'default')">
        <button @click="toggleMini">X</button>
      </li>
      <li
        v-for="item in option" :key="item.key"
        class="btn-wrapper"
      >
        <SidebarButton
          :title="item.title"
          @click="addTab(item)"
          :mini="mini"
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
import { useTabStore } from '../../store/useTabStore'

const mini = ref(false)

const option = ref<SidebarOption[]>(SIDE_BAR.main_module)
const tabStore = useTabStore()

function addTab (item: SidebarOption) {
  const obj = {
    id: tabStore.tabs.length + 1,
    title: item.title,
    key: item.key,
    componentId: item.componentId
  }
  tabStore.addTab(obj)
}

function toggleMini () {
  mini.value = !mini.value
}

</script>
<style lang="scss" scoped>
.sidebar {
  background: #005AA7;
  background: -webkit-linear-gradient(#b8e4d8, #aed0ed);
  background: linear-gradient(#b8e4d8, #aed0ed);
  width: fit-content;
  padding: $sm;
  transition: 500ms;
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
.mini {
}
</style>
