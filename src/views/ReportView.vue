<template>
  <!-- <div> -->
    <TabView v-model="tab">
    </TabView>
  <!-- </div> -->
</template>

<script setup lang="ts">
import TabView from '../components/Tab/TabView.vue'
import { ref, watch } from 'vue'
const tab = ref('')
watch(tab, (val) => {
  console.log(val)
})
</script>

<style scoped lang="scss">

</style>
