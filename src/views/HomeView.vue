<template>
  <div class="root">
    <div class="" style="display: flex; gap: 1em; margin-bottom: 1em;">
      <popper-comp offset="right">
      </popper-comp>
      <popper-comp offset="left">
      </popper-comp>
      <popper-comp offset="top">
      </popper-comp>
      <popper-comp offset="bottom">
      </popper-comp>
    </div>
    <Button ref="btnRef" @click="test">
      Button
    </Button>
    <menu-comp></menu-comp>
    <Button 
      variant="outlined"
      @click="toggleDialog"
    >
      Dialog
    </Button>
    <Dialog v-model:show="showDialog">test</Dialog>
    <Select :items="[{title: 'Apple', value: 'apple'}]"></Select>
    <select>
      <option value="test">Test</option>
    </select>
    <Tabs v-model="currentTab">
      <Tab v-for="tab in tabs" :key="tab.key" :value="tab.key">
       {{ tab.title }}
      </Tab>
    </Tabs>
    <!-- <Window v-model="currentTab">
    </Window> -->
  </div>
</template>
<script setup lang="ts">
import { ref, watch } from 'vue'
import PopperComp from '../components/UI/Popper/PopperComp.vue'
import Button from '../components/UI/Button/Button'
import Dialog from '../components/UI/Dialog/Dialog'
import Tabs from '../components/Tab/Tabs';
import Tab from '../components/Tab/Tab'
// import Window from '../components/UI/Window/Window'
import MenuComp from '../components/UI/Menu/Menu'
import Select from '../components/UI/Select/Select'

const btnRef = ref(null)
const test = () => {
  console.log(btnRef.value)
}

const showDialog = ref(false)
function toggleDialog () {
  showDialog.value = !showDialog.value
  console.log(showDialog.value)
}

const currentTab = ref('')
watch(currentTab, (val) => {
  console.log(val)
})

const tabs = [
  {
    key: 'a',
    title: 'tab a'
  },
  {
    key: 'b',
    title: 'tab b'
  }
]

</script>
<style lang="scss" scoped>
</style>
