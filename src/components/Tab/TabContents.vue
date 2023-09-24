<template>
  <div class="tab-item-wrapper">
    <template
      v-for="item, i in tabItems" :key="i"
    >
      <slot v-bind="item">
        <div v-if="tabValue === item.key" class="tab-item">
          {{ item }}
        </div>
      </slot>
    </template>
  </div>
</template>

<script setup lang="ts">
import { PropType, computed } from 'vue'

type TabItem = {
  key: string,
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

</script>

<style lang="scss" scoped>
.tab-item-wrapper {
  // height: inherit;
  background-color: #cecece;
}
</style>
