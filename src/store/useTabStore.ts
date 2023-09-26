import { defineStore } from 'pinia'
import { Tab } from '../components/Tab/Tab'
import { ref } from 'vue'
export const useTabStore = defineStore('tab', () => {
  const tabs = ref<Tab[]>([])
  const currentTab = ref<Tab>()
  function addTab (tab: Tab) {
    tabs.value.push(tab)
  }
  function closeTab () {
    tabs.value.pop()
  }
  return { tabs, addTab, currentTab, closeTab }
})
