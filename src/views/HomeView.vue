<template>
  <div class="root">
    <button-comp variant="default">default</button-comp>
    <button-comp variant="flat">flat</button-comp>
    <button-comp variant="outlined">outlined</button-comp>
    <button-comp variant="text">text</button-comp>
    <button-comp variant="plain">plain</button-comp>
    <popper-comp offset="right">
    </popper-comp>
    <popper-comp offset="left">
      <template v-slot:activator="{ on }">
        <div class="" v-on="on">
          V-on
        </div>
      </template>
    </popper-comp>
    <popper-comp offset="top">
    </popper-comp>
    <popper-comp offset="bottom">
    </popper-comp>
  </div>
</template>
<script setup lang="ts">
import ButtonComp from '../components/UI/Button/ButtonComp.vue'
import PopperComp from '../components/UI/Popper/PopperComp.vue'
// import DatePicker from '../components/UI/DatePicker/DatePicker.vue'

</script>
<style lang="scss" scoped>
.root {
}
</style>
