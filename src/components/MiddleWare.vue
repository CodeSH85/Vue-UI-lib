<template>
  <component :is="tabs[componentId]"></component>
</template>
<script setup lang="ts">
import FormView from '../views/FormView.vue'
import EditorView from '../views/EditorView.vue'
import SpreadSheetView from '../views/SpreadSheetView.vue'
import DiagramView from '../views/DiagramView.vue'
defineProps({
  componentId: {
    type: String
  }
})
const tabs = {
  FormView,
  EditorView,
  SpreadSheetView,
  DiagramView
}
</script>
<style lang="scss" scoped>

</style>
