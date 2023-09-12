<template>
  <button
    :class="buttonClass"
    :type="btnType"
    v-bind="$attrs"
  >
    <slot default>
      {{ btnType }}
    </slot>
  </button>
</template>
<script setup lang="ts">
import { PropType, ref, useAttrs } from 'vue'
const attrs = useAttrs()
const props = defineProps({
  type: {
    type: String as PropType<string | null>,
    default: 'button'
  }
})
const btnType = props.type
console.log(attrs)
const buttonClass = ref<string>('main')

</script>
<style scoped lang="scss">
button {
  color: white;
  padding: $md $xl;
  letter-spacing: .08em;
  text-transform: uppercase;
  background-color: $primary-color;
  border-radius: $border-radius-md;
  &:hover {
    background-color: #21a57f;
  }
  &:active {
    background-color: #037859;
  }
}
.outlined {
  border: 1px solid $primary-color;
}
.disabled {
  border: 1px solid $primary-color;
}
.filled {
  border: none;
  background-color: $bg-gray-primary;
  box-shadow: $shadow-main;
}
</style>
