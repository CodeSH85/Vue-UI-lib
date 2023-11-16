<template>
  <div class="">
    <button-comp variant="outlined">outlined</button-comp>
    <menu-comp
      :items="items" v-model="v"
    />
    <trigger></trigger>
  </div>
</template>
<script setup lang="ts">
import ButtonComp from '../components/UI/Button/ButtonComp.vue'
import MenuComp from '../components/UI/Menu/MenuComp.vue'
import trigger from '../components/UI/Popper/trigger.vue'
import { ref } from 'vue'
const v = ref('')
const items = [
  { title: 'SKT', key: 'SKT', value: 'skt' },
  { title: 'JDG', key: 'JDG', value: 'jdg' },
  { title: 'BLG', key: 'BLG', value: 'blg' }
]

</script>
<style lang="scss" scoped>

</style>
