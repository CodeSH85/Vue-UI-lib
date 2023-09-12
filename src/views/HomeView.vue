<template>
  <EditorComp />
  <Text-input filled outlined label="hello"></Text-input>
  <Text-input primary v-model="test" type="number"></Text-input>
  <Text-input second disabled></Text-input>
  <ButtonComp>test</ButtonComp>
</template>
<script setup lang="ts">
import TextInput from '../components/UI/TextInput.vue'
import ButtonComp from '../components/UI/ButtonComp.vue'
import EditorComp from '../components/EditorComp.vue'

import { ref } from 'vue'

const test = ref<string>('')

</script>
<style lang="scss" scoped>

</style>
