<template>
  <div class="">
    <toolbar-comp :tool-options="ToolOptions" />
    <spread-sheet>
    </spread-sheet>
  </div>
</template>
<script setup lang="ts">
import ToolbarComp from '../components/Toolbar/ToolbarComp.vue'
import SpreadSheet from '../components/SpreadSheet/SpreadSheet.vue'
import ToolOptions from '../components/SpreadSheet/ToolOptions.json'

</script>
<style lang="scss" scoped>

</style>
