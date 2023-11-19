<template>
  <nav
    class="sidebar"
    :class="mini ? 'mini' : ''"
  >
    <ul class="main-module-wrapper">
      <li :class="(mini ? 'mini' : 'default')">
        <button @click="toggleMini">
          {{ mini ? '>' : '<' }}
        </button>
      </li>
      <li
        v-for="item, i in option" :key="item.key"
        class="btn-wrapper"
        :ref="el => functionRef(el, i)"
      >
        <SidebarButton
          class="sidebar-btn"
          :title="item.title"
          @click="handleClickBtn(item, i)"
          :mini="mini"
        >
        </SidebarButton>
        <div
          v-if="showOption.key === item.key && showOption.show && item?.subModule.length"
          class="menu-item"
          :style="{
            left: showOption.x + 'px',
            right: showOption.y + 'px',
          }"
        >
          <template v-for="x, v in item.subModule" :key="v">
            <SidebarButton
              class="sidebar-child-btn"
              @click="handleClickBtn(x, v)"
            >
              {{ x.title }}
            </SidebarButton>
          </template>
        </div>
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
const showOption = ref(
  {
    x: 0,
    y: 0,
    key: '',
    show: false
  }
)
type ele = {
  [ele: string]: HTMLAllCollection,
}
const sidebarButtons = ref<ele>([])

function handleClickBtn (item: SidebarOption, i:number) {
  if (item.componentId) {
    const obj = {
      id: tabStore.tabs.length + 1,
      title: item.title,
      key: item.key,
      componentId: item.componentId
    }
    tabStore.addTab(obj)
  } else if (item.subModule) {
    console.log(sidebarButtons.value[i].getBoundingClientRect())

    showOption.value.show = !showOption.value.show
    showOption.value.key = item.key
    showOption.value.x = sidebarButtons.value[i].getBoundingClientRect().right
    showOption.value.y = sidebarButtons.value[i].getBoundingClientRect().top
  }
}

const functionRef = (el, i) => {
  sidebarButtons.value[i] = el
}

function toggleMini () {
  mini.value = !mini.value
}

</script>
<style lang="scss" scoped>
.sidebar {
  color: $on-primary-color;
  background: $primary-container-color;
  width: fit-content;
  transition: 300ms;
}
.btn-wrapper {
  display: flex;
  flex-direction: column;
  width: auto;
}
.sidebar-btn {
  color: $on-primary-color;
  padding: $md;
  position: relative;
  &:hover {
    color: $on-primary-color;
    background: $primary-container-color;
  }
}
.sidebar-child-btn {
  width: fit-content;
  padding: .5em .5em;
  position: relative;
  color: $on-primary-color;
  background: $primary-color;
  &:hover {
    color: white;
    background-color: $primary-container-color;
  }
}
.menu-item {
  position: absolute;
  display: flex;
  flex-direction: column;
}
</style>
