<template>
  <div>
    <FormComp :row="props.data"/>
    <button-comp variant="outlined">Generate</button-comp>
  </div>
</template>
<script setup lang="ts">
import ButtonComp from '../components/UI/Button/ButtonComp.vue'
import FormComp from '../components/FormComp.vue'
defineOptions({
  name: 'Accounting-View'
})
const props = defineProps({
  data: {
    type: Array
  }
})
console.log(props.data)
</script>
<style lang="scss" scoped>

</style>
