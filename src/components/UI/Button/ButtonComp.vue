<template>
  <button
    ref="buttonRef"
    :class="[
      variant,
      size,
      rounded,
      'rounded'
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
.default {
  color: $on-primary-color;
  padding: $md;
  margin: $md;
  letter-spacing: .065em;
  text-transform: uppercase;
  border-radius: $border-radius-md;
  background-color: $primary-color;
  box-shadow: $shadow-main;
  &:hover {
    background-color: $primary-container-color;
  }
  &:active {
    background-color: $primary-container-color;
  }
}
.flat {
  @extend .default;
  box-shadow: none;
}
.outlined {
  color: $on-primary-color;
  padding: $md;
  margin: $md;
  letter-spacing: .065em;
  text-transform: uppercase;
  border-radius: $border-radius-md;
  box-shadow: $shadow-main;
  color: $primary-color;
  border: 1.5px solid $primary-color;
  background-color: none;
  &:hover {
    background-color: #dde5e8;
  }
  &:active {
    color: $white;
    background-color: $primary-container-color;
  }
}
.text {
  padding: $md;
  margin: $md;
  letter-spacing: .065em;
  text-transform: uppercase;
  border-radius: $border-radius-md;
  box-shadow: $shadow-main;
  background-color: none;
  color: $primary-color;
  &:hover {
    background-color: $gray-200;
  }
}
.disabled {
  border: 1.5px solid $primary-color;
}

.plain {
  padding: $md;
  margin: $md;
  letter-spacing: .065em;
  text-transform: uppercase;
  border-radius: $border-radius-md;
  color: $primary-color;
  background-color: none;
}
</style>
