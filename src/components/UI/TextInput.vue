<template>
  <label>
    {{ label }}
    <input
      :id="label"
      :name="label"
      :type="type"
      v-bind="$attrs"
      v-model="inputValue"
      :class="classResult"
    >
  </label>
</template>
<script setup lang="ts">
import { ref, PropType, watch, useAttrs, computed } from 'vue'

const attrs = useAttrs()
const props = defineProps({
  modelValue: {
    type: [String, Number] as PropType<string | number | undefined>
  },
  type: {
    type: [String] as PropType<string | undefined>,
    default: 'text'
  },
  color: {
    type: [String] as PropType<string | undefined>,
    default: 'white'
  },
  label: {
    type: String as PropType<string | undefined>,
    default: null
  }
})

const emit = defineEmits(['update:modelValue'])
const inputValue = ref(props.modelValue)
const type = ref(props.type)

const label = ref(props.label)

const variantList: string[] = ['outlined', 'filled', 'plain', 'text', 'default']
// let isColor = ref()

const classList = ref<string[]>([])

const classResult = computed(() => {
  return classList.value.join(',')
})

const attrKeys = Object.keys(attrs)

attrKeys.find(item => {
  let res = ''
  variantList.forEach(variant => {
    if (variant === item) {
      classList.value.push(item)
      res = item
    } else {
      res = 'default'
    }
  })
  return res
})

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
  border: 2px solid $primary-color;
  padding: $sm;
}
.default {
  padding: $md;
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
