<template>
  <div class="root">
    <div class="" style="display: flex;">
      <popper-comp offset="right">
      </popper-comp>
      <popper-comp offset="left">
      </popper-comp>
      <popper-comp offset="top">
      </popper-comp>
      <popper-comp offset="bottom">
      </popper-comp>
    </div>
    <Button @click="test" ref="btnRef">
      Button
    </Button>
    <Button variant="outlined"
      @click="toggleDialog"
    >
      Dialog
    </Button>
    <Dialog v-model:show="showDialog">test</Dialog>
    <Tabs :tabs="tabs" v-model="currentTab"></Tabs>
  </div>
</template>
<script setup lang="ts">
import { ref, watch } from 'vue'
import PopperComp from '../components/UI/Popper/PopperComp.vue'
import Button from '../components/UI/Button/Button'
import Dialog from '../components/UI/Dialog/Dialog'
import Tabs from '../components/Tab/Tabs'

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
.root {
}
</style>
