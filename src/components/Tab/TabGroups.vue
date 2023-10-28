<template>
  <div class="root" ref="root">
    <ul class="tab-item-wrapper">
      <li
        v-for="item, index in items" :key="index"
        :class="(currentTab === item.key ? 'active-tab' : '') + ' tab'"
      >
        <slot v-bind="{ index, item }">
          <span class="tab-item">
            <button @click="setCurrentTab(item.key)">
              {{ item.title }}
            </button>
            <button @click="closeTab(item.id)">
              x
            </button>
          </span>
        </slot>
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
import { PropType, ref, watch, onMounted } from 'vue'

type TabItem = {
  key: string,
  [items: string]: unknown
}

defineProps({
  modelValue: {
    type: [String, Number] as PropType<string | number>
  },
  items: {
    type: Array as PropType<TabItem[]>
  }
})

const currentTab = ref<string | number>()

onMounted(() => {
  // currentTab.value = tabItems.value[0].key
})

const emit = defineEmits(['update:modelValue', 'closeTab'])

const setCurrentTab = (key: string) => {
  currentTab.value = key
  emit('update:modelValue', key)
}
const closeTab = (key: string | number) => {
  emit('closeTab', key)
}

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
