<template>
  <input
    :type="type"
    v-bind="$attrs"
    v-model="inputValue"
    :class="variant"
  >
</template>
<script setup lang="ts">
import { ref, PropType, watch, useAttrs } from 'vue'

const attrs = useAttrs()
const props = defineProps({
  modelValue: {
    type: [String, Number] as PropType<string | number | undefined>
  },
  type: {
    type: [String] as PropType<string | undefined>,
    default: 'text'
  }
})

const emit = defineEmits(['update:modelValue'])
const inputValue = ref(props.modelValue)
const type = ref(props.type)
const variantList: string[] = ['outline', 'disable', 'fill']

const variant = variantList.find(item => {
  if (attrs[item]) {
    return item
  } else {
    return 'mo'
  }
})

console.log(variant)

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
  border: 1px solid blue;
}
.outline {
  border: 2px solid var($primary-color);
}
.disable {
  border: 2px solid var($primary-color);
}
</style>
