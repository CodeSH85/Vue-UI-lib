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
      @focus="onFocus"
      @blur="onBlur"
      >
  </label>
</template>
<script setup lang="ts">
import { ref, PropType, watch, computed } from 'vue'

defineOptions({
  inheritAttrs: false
})

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
  },
  density: {
    type: String as PropType<string | undefined>,
    default: 'default'
  }
})

const emit = defineEmits(['update:modelValue'])
const inputValue = ref(props.modelValue)

const classList = ref<string[]>([])
const classResult = computed(() => {
  return classList.value.join(' ')
})

const variantList: string[] = ['outlined', 'filled', 'plain', 'text', 'default']
const densityList: string[] = ['default', 'compact', 'comfortable']
const variantResult: string | undefined = variantList.find(style => style === props.variant)
const densityResult: string | undefined = densityList.find(style => style === props.density)
classList.value.push('variant-' + variantResult ?? 'default')
classList.value.push('density-' + densityResult ?? 'default')

watch(inputValue,
  (newVal) => emit('update:modelValue', newVal),
  { immediate: true, deep: true }
)

watch(() => props.modelValue,
  (newVal) => {
    inputValue.value = newVal
  }
)

const isActive = ref<boolean>(false)

function onFocus () {
  isActive.value = true
}

function onBlur () {
  isActive.value = false
}

</script>
<style scoped lang="scss">

input {
  margin: $md;
  border-radius: $border-radius-sm;
  border: 1.5px solid $primary-color;
  padding: $sm;
  position: relative;
}
.variant-default {
  padding: $md;
}
.variant-outlined {
  border: 1.5px solid $primary-color;
}
.disabled {
  border: 1.5px solid $primary-color;
}
.variant-filled {
  border: none;
  background-color: $gray-100;
  box-shadow: $shadow-main;
}
.wrapper {
  position: relative;
}
.text {
  margin: inherit;
  position: absolute;
  z-index: 2;
  transform: translateY(50%);
}
.density-default {
  padding: $md;
}
.density-compact {
  padding: $sm;
  margin: $sm;
}
</style>
