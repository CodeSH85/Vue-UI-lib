<template>
  <label>
    {{ label }}
    <input
      :id="label"
      :name="label"
      :type="type"
      v-bind="$attrs"
      v-model="inputValue"
      :variant="variantResult"
      :color="color"
      :class="classResult"
    >
  </label>
</template>
<script setup lang="ts">
import { ref, PropType, watch, computed } from 'vue'

const props = defineProps({
  modelValue: {
    type: [String, Number] as PropType<string | number | undefined>
  },
  type: {
    type: String as PropType<string | undefined>,
    default: 'text'
  },
  color: {
    type: String as PropType<string | undefined>,
    default: 'white'
  },
  label: {
    type: String as PropType<string | undefined>,
    default: null
  },
  variant: {
    type: String as PropType<string | undefined>,
    default: null
  }
})

const emit = defineEmits(['update:modelValue'])
const inputValue = ref(props.modelValue)

const { variant, label, type, color } = props

const classList = ref<string[]>([])
const classResult = computed(() => {
  return classList.value.join(',')
})

const variantList: string[] = ['outlined', 'filled', 'plain', 'text', 'default']
const variantResult: string | undefined = variantList.find(style => style === variant)
classList.value.push(variantResult ?? 'default')

watch(inputValue,
  (newVal) => emit('update:modelValue', newVal),
  { immediate: true, deep: true }
)

watch(() => props.modelValue,
  (newVal) => {
    inputValue.value = newVal
  }
)

</script>
<style scoped lang="scss">

input {
  margin: $md;
  border-radius: $border-radius-sm;
  border: 1.2px solid $primary-color;
  padding: $sm;
}
.default {
  padding: $md;
}
.outlined {
  border: 1.2px solid $primary-color;
}
.disabled {
  border: 1.2px solid $primary-color;
}
.filled {
  border: none;
  background-color: $bg-gray-primary;
  box-shadow: $shadow-main;
}
</style>
