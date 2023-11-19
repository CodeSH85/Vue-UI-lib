<template>
  <button
    ref="buttonRef"
    :class="[
      variant,
      size,
    ]"
    :disabled="disabled"
    :style="{
      color: color
    }"
  >
    <slot />
  </button>
</template>
<script setup lang="ts">
import { ButtonProps } from './props'
import { ref } from 'vue'
defineOptions({
  name: 'ButtonComp'
})
defineProps({
  ...ButtonProps
})
type DOMElement = HTMLElement | null
const buttonRef = ref<DOMElement>(null)

defineExpose({
  buttonRef
})

</script>
<style lang="scss" scoped>
@import url('./button.scss');
</style>
