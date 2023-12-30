<template>
  <div
    class="tab-item-wrapper"
  >
    <template
      v-for="item, index in tabItems" :key="index"
    >
      <slot
        v-if="item.key === tabValue"
        v-bind="{index, item}"
      >
      </slot>
    </template>
  </div>
</template>

<script setup lang="ts">
import { PropType, computed, watch } from 'vue'

defineOptions({
  name: 'TabContent'
})

type TabItem = {
  key: string,
  componentName: string,
  [items: string]: unknown
}

const props = defineProps({
  tabItems: {
    type: Array as PropType<TabItem[]>
    // required: true
  },
  modelValue: {
    type: [String, Number]
  }
})

const emit = defineEmits(['update:modelValue'])

const tabValue = computed({
  get () {
    return props.modelValue
  },
  set (value) {
    emit('update:modelValue', value)
  }
})

watch(tabValue, (val) => {
  console.log(val)
})

</script>

<style lang="scss" scoped>
.tab-item-wrapper {
  padding: $lg;
  background-color: #ffffff;
}
</style>
