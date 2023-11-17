<template>
  <button
    ref="buttonRef"
    :class="[variant]"
  >
    <slot default>
    </slot>
  </button>
</template>
<script setup lang="ts">
import { PropType, ref } from 'vue'

const props = defineProps({
  variant: {
    type: String as PropType<string | undefined>,
    default: 'default'
  },
  size: {
    type: String,
    default: 'md'
  },
  loading: {
    type: Boolean,
    default: false
  }
})

const classList = ref<string[]>([])
const variantList: string[] = ['outlined', 'filled', 'plain', 'text', 'default', 'elevated']
const variantResult: string | undefined = variantList.find(style => style === props.variant)
classList.value.push(variantResult ?? 'default')

type DOMElement = HTMLElement | null
const buttonRef = ref<DOMElement>(null)

defineExpose({
  buttonRef
})

</script>
<style lang="scss" scoped>
button {
  color: $white;
  padding: $md;
  margin: $md;
  letter-spacing: .08em;
  text-transform: uppercase;
  border-radius: $border-radius-md;
}
.default {
  background-color: $primary-color;
  &:hover {
    background-color: #1a9cbf;
  }
  &:active {
    background-color: #034078;
  }
}
.outlined {
  color: $primary-color;
  border: 1.5px solid $primary-color;
  background-color: none;
  &:hover {
    background-color: #dde5e8;
  }
  &:active {
    color: $white;
    background-color: hsl(221, 58%, 80%);
  }
}
.disabled {
  border: 1.5px solid $primary-color;
}
.filled {
  border: none;
  background-color: $bg-gray-primary;
  box-shadow: $shadow-main;
}
.elevated {
  background-color: $primary-color;
  box-shadow: $shadow-main;
}
</style>
