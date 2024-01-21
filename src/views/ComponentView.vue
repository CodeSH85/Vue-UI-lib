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
    <Button 
      ref="btnRef"
      @click="test"
    >
      Button
    </Button>
    <menu-comp></menu-comp>
    <Button 
      variant="outlined"
      @click="toggleDialog"
    >
      Dialog
    </Button>
    <Dialog v-model:show="showDialog"></Dialog>
    <Select
      v-model="selectedValue"
      :items="mockItems"
    ></Select>
    <TextInput
      v-model="inputValue"
      label="name" placeholder="input text"
    >
    </TextInput>
    <!-- <Tabs v-model="currentTab">
      <Tab v-for="tab in tabs" :key="tab.key" :value="tab.key">
       {{ tab.title }}
      </Tab>
    </Tabs> -->
    <!-- <DatePicker></DatePicker> -->
    <Navbar
      :items="[{key: 'a', title: 'A'}, {key: 'b', title: 'B'}]"
    ></Navbar>
    <!-- <Window v-model="currentTab">
    </Window> -->
  </div>
</template>
<script setup lang="ts">
import { ref, watch } from 'vue'
import TextInput from '../components/UI/TextInput/TextInput'
import PopperComp from '../components/UI/Popper/PopperComp.vue'
import Button from '../components/UI/Button/Button'
import Dialog from '../components/UI/Dialog/Dialog'
import Tabs from '../components/Tab/Tabs';
import Tab from '../components/Tab/Tab'
// import Window from '../components/UI/Window/Window'
import MenuComp from '../components/UI/Menu/Menu'
import Select from '../components/UI/Select/Select'
import DatePicker from '../components/UI/DatePicker/DatePicker.vue'
import Navbar from '../components/UI/Nav/Navbar'

const inputValue = ref('')

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

const selectedValue = ref('')
watch(selectedValue, (val) => {
  console.log(val)
})

const mockItems = [
  {
    title: 'Apple',
    value: 'apple'
  },
  {
    title: 'Banana',
    value: 'banana'
  },
  {
    title: 'Orange',
    value: 'orange'
  },
  {
    title: 'Cherry',
    value: 'cherry'
  }
]

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
.text-input {
  border: 2px solid red;
}
</style>
../components/UI/Nav/Sidebar