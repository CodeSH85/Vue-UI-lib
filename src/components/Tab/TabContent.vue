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

type TabItem = {
  key: string,
  componentId: string,
  [items: string]: unknown
}

const props = defineProps({
  tabItems: {
    type: Array as PropType<TabItem[]>
  },
  modelValue: {
    type: [String, Number] as PropType<string | number>
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
  // height: 100%;
  padding: $lg;
  background-color: #ffffff;
}
</style>
