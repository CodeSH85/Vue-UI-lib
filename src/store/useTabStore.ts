import { defineStore } from 'pinia'
import { Tab } from '../components/Tab/Tab'
import { ref } from 'vue'
export const useTabStore = defineStore('tab', () => {
  const tabs = ref<Tab[]>([])

  const currentTab = ref<Tab>()

  function addTab (tab: Tab) {
    if (tabs.value.find(item => item.key === tab.key)) return
    if (tabs.value.length < 10) {
      tabs.value.push(tab)
      setCurrentTab(tab)
    }
  }

  function setCurrentTab (tab: Tab) {
    currentTab.value = tab
  }

  function setTabUnSave (tab: Tab) {
    console.log(tab)
  }

  function closeTab (tabId: Tab['id']) {
    tabs.value = tabs.value.filter(item => item.id !== tabId)
  }

  return {
    tabs,
    addTab,
    currentTab,
    setCurrentTab,
    setTabUnSave,
    closeTab
  }
})
