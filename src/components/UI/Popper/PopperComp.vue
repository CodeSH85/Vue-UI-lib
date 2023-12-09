<template>
  <activator-comp @showContent="showContent" :ref="(el) => setActivatorRef(el)">
    <slot name="activator" :on="events">
      <button-comp
        v-bind="props"
        variant="outlined"
        v-on="events"
      >
        Popper
      </button-comp>
    </slot>
  </activator-comp>
  <div
    v-show="display"
    class="content-container"
    :class="`content-offset-${props.offset}`"
    ref="contentRef"
    :style="{
      left: contentState.x + 'px',
      top: contentState.y + 'px',
    }"
  >
    <slot>
      <div class="">
        content
      </div>
    </slot>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import activatorComp from './activator.vue'
import ButtonComp from '../Button/ButtonComp.vue'
import { PopperProps } from './popper'
import { onClickOutside } from '@vueuse/core'

const props = defineProps(PopperProps)

const display = ref(false)
const activatorRef = ref<HTMLElement | null>()
const contentRef = ref()
const contentState = ref({
  x: 0,
  y: 0
})

function setActivatorRef (ele: HTMLElement) {
  activatorRef.value = ele
}
const events = {
  click: () => {
    display.value = !display.value
  }
}
onMounted(() => {
  if (activatorRef.value && activatorRef.value.activatorRef) {
    const target = activatorRef.value.activatorRef
    const y = target.getBoundingClientRect().bottom
    const x = target.getBoundingClientRect().right
    const activatorHeight = target.getBoundingClientRect().height
    const activatorWidth = target.getBoundingClientRect().width
    // const content = getComputedStyle(contentRef.value).height
    switch (props.offset) {
      case 'left':
        contentState.value.x = x - activatorWidth - 120
        contentState.value.y = y - activatorHeight
        break
      case 'right':
        contentState.value.x = x
        contentState.value.y = y - activatorHeight
        break
      case 'top':
        contentState.value.x = x - activatorWidth
        contentState.value.y = y - activatorHeight - 120
        break
      case 'bottom':
        contentState.value.x = x - activatorWidth
        contentState.value.y = y
        break
      default:
        break
    }
  }
})

const showContent = () => {
  display.value = !display.value
}

onClickOutside(activatorRef, () => {
  display.value = false
})
</script>

<style lang="scss" scoped>
.content-container {
  position: absolute;
  z-index: 10;
  background-color: $surface-primary;
}
.content-offset-left {
  left: 210px;
  top: 150px;
}
.content-offset-bottom {
}
</style>
