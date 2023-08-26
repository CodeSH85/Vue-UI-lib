<script setup lang="ts">
import { ref } from 'vue'

interface Props {
  type?: string
  primary?: boolean
  text?: string
}

defineProps<Props>()

const buttonClass = ref<string>('main')

</script>
<template>
  <button :class="buttonClass">
    <slot default>
      {{ text }}
    </slot>
  </button>
</template>
<style scoped lang="scss">
button {
  color: white;
  padding: .6em;
  letter-spacing: .08em;
  text-transform: uppercase;
  background-color: $primary-color;
  border-radius: .25em;
  &:hover {
    background-color: #21a57f;
  }
  &:active {
    background-color: #21a57f;
  }
}
</style>
