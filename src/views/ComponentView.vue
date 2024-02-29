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
    >
      Button
    </Button>
    <menu-comp></menu-comp>
    <Button 
      variant="outlined"
      @click="toggleDialog">
      Dialog
    </Button>
    <Dialog 
      v-model:show="showDialog">
    </Dialog>
    <Select
      v-model="selectedValue"
      :items="mockItems">
    </Select>
    <Navbar :items="side"></Navbar>
    <text-input
      v-model="inputValue"
      label="name" placeholder="input text">
    </text-input>
    <Checkbox
      v-model="checkboxVal"
      label="check box">
    </Checkbox>
    {{ checkboxVal }}
    <Tabs v-model="currentTab" :tabs="tabs"></Tabs>
    <DatePicker></DatePicker>
    {{ autoCompleteResult }}
    <AutoComplete
      v-model="autoCompleteResult"
      :items="mockItems"
    >
    </AutoComplete>
    <Menu :items="mockItems"></Menu>
  </div>
</template>
<script setup lang="ts">
import { ref, watch } from 'vue'
import TextInput from '../components/UI/TextInput/TextInput'
import PopperComp from '../components/UI/Popper/PopperComp.vue'
import Button from '../components/UI/Button/Button'
import Dialog from '../components/UI/Dialog/Dialog'
import Tabs from '../components/UI/Tab/Tabs'
import MenuComp from '../components/UI/Menu/Menu'
import Select from '../components/UI/Select/Select'
import DatePicker from '../components/UI/DatePicker/DatePicker.vue'
import Navbar from '../components/UI/Navbar/Navbar'
import Checkbox from '../components/UI/Checkbox/Checkbox'
import AutoComplete from '../components/UI/AutoComplete/AutoComplete'
import Menu from '../components/UI/Menu/Menu'

const inputValue = ref('')

const btnRef = ref(null)

const checkboxVal = ref(false)

const showDialog = ref(false)
function toggleDialog () {
  showDialog.value = !showDialog.value
  console.log(showDialog.value)
}



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
  },
  {
    title: 'Melon',
    value: 'melon'
  },
  {
    title: 'Peach',
    value: 'peach'
  },
  {
    title: 'Papaya',
    value: 'papaya'
  },
  {
    title: 'Grape',
    value: 'grape'
  },
  {
    title: 'Pineapple',
    value: 'pineapple'
  }
]
const autoCompleteResult = ref('')

const currentTab = ref('b')
watch(currentTab, (val) => {
  console.log(val)
})
const tabs = [
  {
    title: 'Tab A',
    value: 'a'
  },
  {
    title: 'Tab B',
    value: 'b'
  },
  {
    title: 'Tab C',
    value: 'c'
  },
  {
    title: 'Tab D',
    value: 'd'
  }
]

const side = [
  {
    key: 'a',
    title: 'tab a',
    children: [
      {
        key: 'a-1',
        title: 'tab a-1'
      },
      {
        key: 'a-2',
        title: 'tab a-2',
        children: [
          {
            key: 'a-2-1',
            title: 'tab a-2-1'
          },
          {
            key: 'a-2-2',
            title: 'tab a-2-2'
          }
        ]
      },
    ]
  },
  {
    key: 'b',
    title: 'tab b',
    children: [
      {
        key: 'b-1',
        title: 'tab b-1'
      },
      {
        key: 'b-2',
        title: 'tab b-2'
      },
    ]
  }
]

</script>
<style lang="scss" scoped>
.text-input {
  border: 2px solid red;
}
</style>
