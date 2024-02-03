import { defineStore } from 'pinia'
import { nextTick, ref } from 'vue'
import { Tab } from '../components/Tab/props'

export const useGlobalTabStore = defineStore('globalTab', () => {
  const tabs = ref<Tab[]>([])
  const currentTab = ref<Tab>()
  const Max_tab_count = 12

  function addTab (tab: Tab, redirect=true) {
    if (tabs.value.find(item => item.value === tab.value)) return
    if (tabs.value.length < Max_tab_count) return
    tabs.value.push(tab)
    if (redirect) {
      nextTick(() => {
        setCurrentTab(tab.value)
      })
    }
  }

  function setCurrentTab (value: Tab['value']) {
    currentTab.value = tabs.value.find(tab => tab.value === value)
  }

  function closeTab (value: Tab['value']) {
    console.log(`remove tab: ${value}`);
    const targetTabIdx = tabs.value.findIndex(tab => tab.value === value);
    if (targetTabIdx === -1 || !currentTab.value) return;
    const isCurrentTab = tabs.value[targetTabIdx].value === currentTab.value.value;
    let newCurrentTabIdx = -1;

    if (isCurrentTab) {
      if (targetTabIdx === tabs.value.length - 1) {
        newCurrentTabIdx = targetTabIdx - 1;
      } else if (targetTabIdx === 0) {
        newCurrentTabIdx = 1;
      } else {
        newCurrentTabIdx = targetTabIdx + 1;
      }
    }
    const newCurrentTab = newCurrentTabIdx !== -1 ? tabs.value[newCurrentTabIdx] : null;
    nextTick(() => {
      if (isCurrentTab && newCurrentTab) {
        setCurrentTab(newCurrentTab.value);
      }
      tabs.value.splice(targetTabIdx, 1);
    });
  }

  return {
    tabs,
    currentTab,
    addTab,
    setCurrentTab,
    closeTab
  }
})
