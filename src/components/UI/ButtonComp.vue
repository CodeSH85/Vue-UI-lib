<template>
  <ButtonWrapper>
    <slot name="before">
    </slot>
    <button
      :type="type"
      v-bind="$attrs"
      :class="classResult"
      :variant="variantResult"
    >
      <slot default>
        {{ type }}
      </slot>
    </button>
    <slot name="after">
    </slot>
  </ButtonWrapper>
</template>
<script setup lang="ts">
import ButtonWrapper from './ButtonWrapper.vue'
import { PropType, ref, computed } from 'vue'

const props = defineProps({
  type: {
    type: String as PropType<string | undefined>,
    default: 'button'
  },
  variant: {
    type: String as PropType<string | undefined>,
    default: 'default'
  }
})
const { variant, type } = props

const classList = ref<string[]>([])
const classResult = computed(() => {
  return classList.value.join(',')
})
const variantList: string[] = ['outlined', 'filled', 'plain', 'text', 'default']
const variantResult: string | undefined = variantList.find(style => style === variant)
classList.value.push(variantResult ?? 'default')

</script>
<style scoped lang="scss">
button {
  color: white;
  padding: $md $xl;
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
  &:hover {
    background-color: #dde5e8;
  }
  &:active {
    color: $white-100;
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
</style>
