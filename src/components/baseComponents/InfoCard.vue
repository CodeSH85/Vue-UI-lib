<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  AqiSumData : Number
})
const AqiSumData = ref(props.AqiSumData)
console.log(AqiSumData.value)
// const AqiSumData = ref(5)


</script>
<template>
  <!-- <div v-if="AqiSumData !=0" class=""> -->
    <div class="card">
      {{ props.AqiSumData }}
    </div>
  <!-- </div> -->
  <!-- <div v-else class="">
    wait
  </div> -->
</template>
<style lang="scss" scoped>

</style>
