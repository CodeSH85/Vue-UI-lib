<template>
  <component :is="tabs[componentId]" :data="data"></component>
</template>
<script setup lang="ts">
import AccountingView from '../views/AccountingView.vue'
import FormView from '../views/FormView.vue'
import EditorView from '../views/EditorView.vue'
import SpreadSheetView from '../views/SpreadSheetView.vue'
import DiagramView from '../views/DiagramView.vue'
import HomeView from '../views/HomeView.vue'
defineProps({
  componentId: {
    type: String
  },
  data: {
    type: Array
  }
})

const tabs = {
  FormView,
  HomeView,
  EditorView,
  SpreadSheetView,
  DiagramView,
  AccountingView
}

</script>
<style lang="scss" scoped>

</style>
