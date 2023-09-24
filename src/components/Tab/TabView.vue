<template>
  <div class="root" ref="root">
    <ul class="tab-wrapper" ref="tabWrapper">
      <slot/>
      <li
      v-for="tab, t in tabs" :key="t"
      :class="(currentTab === tab.key ? 'active-tab' : '') + ' tab'"
      >
        <span @click="setTab(tab.key)">
          {{ tab.title }}
        </span>
      </li>
    </ul>
    <div class="tab-item-wrapper" :style="{'height': `${itemWrapperHeight}px`}">
      <slot>
        <template
        v-for="items, i in tabItems" :key="i"
        >
          <div v-if="currentTab === items.key" class="tab-item">
            {{ items.title }}
          </div>
        </template>
      </slot>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, watch, onMounted, PropType } from 'vue'
import useComputedStyle from '../../composable/useComputedStyle'

const props = defineProps({
  modelValue: {
    type: [String, Number] as PropType<string | number>,
    default: 'a'
  }
})

const tabs = ref([
  { title: 'Tab A', key: 'a' },
  { title: 'Tab B', key: 'b' },
  { title: 'Tab C', key: 'c' },
  { title: 'Tab D', key: 'd' },
  { title: 'Tab E', key: 'e' }
])
const tabItems = ref([
  { title: 'Tab A', key: 'a' },
  { title: 'Tab B', key: 'b' },
  { title: 'Tab C', key: 'c' },
  { title: 'Tab D', key: 'd' },
  { title: 'Tab E', key: 'e' }
])

const currentTab = ref<string | number>(tabItems.value[0].key)

const emit = defineEmits(['update:modelValue'])
function setTab (key: string) {
  emit('update:modelValue', key)
  currentTab.value = key
}

const tabValue = ref(props.modelValue)
watch(tabValue,
  (newVal) => {
    emit('update:modelValue', newVal)
    currentTab.value = newVal
  },
  { immediate: true, deep: true }
)

const tabWrapper = ref(null)
const root = ref(null)
const itemWrapperHeight = ref<number>(0)

function filterOut (string: string): number {
  const final: number = parseInt(string.replace('px', ''))
  return final
}

onMounted(() => {
  const tabHeight = useComputedStyle(tabWrapper.value, 'height')
  const rootHeight = useComputedStyle(root.value, 'height')
  itemWrapperHeight.value = filterOut(rootHeight) - filterOut(tabHeight)
})
</script>

<style lang="scss" scoped>
.root {
  width: 100%;
  height: 100%;
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
  // height: inherit;
  background-color: #cecece;
}
.active-tab {
  background-color: #fff;
}
</style>
