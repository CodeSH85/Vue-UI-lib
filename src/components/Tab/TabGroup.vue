<template>
  <div class="root" ref="root">
    <ul class="tab-item-wrapper">
      <li
        v-for="item, index in items" :key="index"
        :class="(currentTab === item.key ? 'active-tab' : '') + ' tab'"
      >
        <slot v-bind="{ index, item }">
          <span
            class="tab-item"
          >
            <button
              @click="setCurrentTab(item.key)"
            >
              {{ item.title }}
            </button>
            <button
              @click="closeTab(item.id)"
            >
              x
            </button>
          </span>
        </slot>
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
import { PropType, ref, watch, onBeforeMount } from 'vue'
import { TabItem } from './Tab'

const props = defineProps({
  modelValue: {
    type: [String, Number] as PropType<string | number>
  },
  items: {
    type: Array as PropType<TabItem[]>,
    required: true
  }
})

const currentTab = ref<string | number>()

const emit = defineEmits(['update:modelValue', 'closeTab'])

const setCurrentTab = (key: string) => {
  currentTab.value = key
  emit('update:modelValue', key)
}
const closeTab = (key: string | number) => {
  emit('closeTab', key)
  const curIndex = props.items.findIndex(item => {
    return currentTab.value === item.key
  })
  if (props.items[curIndex + 1]) {
    currentTab.value = props.items[curIndex + 1].key
    emit('update:modelValue', props.items[curIndex + 1].key)
  } else {
    currentTab.value = props.items[curIndex - 1].key
    emit('update:modelValue', props.items[curIndex - 1].key)
  }
}

onBeforeMount(() => {
  currentTab.value = props.items[props.items.length - 1].key
  emit('update:modelValue', props.items[props.items.length - 1].key)
})

watch(props.items,
  (val) => {
    if (val) {
      currentTab.value = val[val.length - 1].key
      emit('update:modelValue', val[val.length - 1].key)
    }
  },
  { immediate: true }
)

watch(currentTab,
  (newVal) => {
    emit('update:modelValue', newVal)
    currentTab.value = newVal
  },
  { immediate: true, deep: true }
)

</script>
<style lang="scss" scoped>
.tab-wrapper {
  display: flex;
}
.tab {
  padding: .4em;
  background-color: $secondary-color;
}
.tab-item {
  display: flex;
}
.tab-item > * {
  padding: $sm;
}
.tab-item-wrapper {
  display: flex;
}
.active-tab {
  background-color: #dcf1ff;
}
</style>
