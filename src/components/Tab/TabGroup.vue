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

type TabItem = {
  key: string,
  [items: string]: unknown
}

const props = defineProps({
  modelValue: {
    type: [String, Number] as PropType<string | number>
  },
  items: {
    type: Array as PropType<TabItem[]>
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
  console.log(currentTab.value)
  const curIndex = props.items.findIndex(item => {
    return currentTab.value === item.key
  })
  if (props.items[curIndex + 1]) {
    console.log(props.items[curIndex + 1].key)
    currentTab.value = props.items[curIndex + 1].key
    emit('update:modelValue', props.items[curIndex + 1].key)
  } else {
    console.log(props.items[curIndex - 1].key)
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
  background-color: #cccccc;
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
