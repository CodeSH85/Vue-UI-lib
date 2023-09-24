<template>
  <div class="root" ref="root">
    <ul class="tab-wrapper" ref="tabWrapper">
      <li
      v-for="tab, t in tabs" :key="t"
      :class="(currentTab === tab.key ? 'active-tab' : '') + ' tab'"
      >
        <slot>
          <span @click="setTab(tab.key)">
            {{ tab.title }}
          </span>
        </slot>
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
import { ref, watch, PropType } from 'vue'

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
.active-tab {
  background-color: #fff;
}
</style>
