<template>
  <trigger @showContent="showContent" :ref="(el) => setTriggerRef(el)">
    <slot>
      <button-comp variant="outlined" @click="showContent">
        Popper
      </button-comp>
    </slot>
  </trigger>
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
    <slot name="content">
      <div class="">
        content
      </div>
    </slot>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import trigger from './trigger.vue'
import ButtonComp from '../Button/ButtonComp.vue'
import { PopperProps } from './popper'
import { onClickOutside } from '@vueuse/core'

const props = defineProps(PopperProps)

const display = ref(false)
const triggerRef = ref<HTMLElement | null>()
const contentRef = ref()
const contentState = ref({
  x: 0,
  y: 0
})

function setTriggerRef (ele: HTMLElement) {
  triggerRef.value = ele
}
onMounted(() => {
  if (triggerRef.value && triggerRef.value.triggerRef) {
    const target = triggerRef.value.triggerRef
    const y = target.getBoundingClientRect().bottom
    const x = target.getBoundingClientRect().right
    const triggerHeight = target.getBoundingClientRect().height
    const triggerWidth = target.getBoundingClientRect().width
    console.log(contentRef.value)
    const content = getComputedStyle(contentRef.value).height
    console.log(content)
    switch (props.offset) {
      case 'left':
        contentState.value.x = x - triggerWidth - 120
        contentState.value.y = y - triggerHeight
        break
      case 'right':
        contentState.value.x = x
        contentState.value.y = y - triggerHeight
        break
      case 'top':
        contentState.value.x = x - triggerWidth
        contentState.value.y = y - triggerHeight - 120
        break
      case 'bottom':
        contentState.value.x = x - triggerWidth
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

onClickOutside(triggerRef, () => {
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
