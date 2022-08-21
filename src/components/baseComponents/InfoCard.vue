<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  parentData : Object
})
// const AqiSumData = ref(props.AqiSumData)
console.log(props.parentData)
// const AqiSumData = ref(5)


</script>
<template>
  <div class="card">
    {{props.parentData.title}}
    <div v-if="props.parentData.data != 0" >
      {{ Math.floor(props.parentData.data) }}
    </div>
    <div v-else class="">
      wait
    </div>
  </div>
</template>
<style lang="scss" scoped>

</style>
