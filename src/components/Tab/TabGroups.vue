<template>
  <div class="root" ref="root">
    <slot>
      <ul class="tab-item-wrapper">
        <li
          v-for="item, i in items" :key="i"
          :class="(currentTab === item.key ? 'active-tab' : '') + ' tab'"
        >
          <button @click="setCurrentTab(item.key)">
            {{ item.title }}
          </button>
        </li>
      </ul>
    </slot>
  </div>
</template>
<script setup lang="ts">
import { PropType, ref, watch, onMounted } from 'vue'

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
const tabItems = ref(props.items)
const currentTab = ref<string | number>(tabItems.value[0].key)

onMounted(() => {
  // currentTab.value = tabItems.value[0].key
})

const emit = defineEmits(['update:modelValue'])

const setCurrentTab = (key: string) => {
  currentTab.value = key
  emit('update:modelValue', key)
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
.root {
  // width: 100%;
  // height: 100%;
}
.tab-wrapper {
  display: flex;
}
.tab {
  width: 3em;
  padding: .4em;
  background-color: #cccccc;
}
.tab-item-wrapper {
  display: flex;
}
.active-tab {
  background-color: #f6f6f6;
}
</style>
