<template>
  <trigger
    @showContent="showContent"
    :ref="(el) => setTriggerRef(el)"
  >
    <slot >
      <button-comp
        variant="outlined"
        @click="showContent"
      >
        Popper
      </button-comp>
    </slot>
  </trigger>
  <div v-show="display" class="content" ref="contentRef">
    <slot name="content">
      <span>
        teleport: {{ content }}
      </span>
    </slot>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import trigger from './trigger.vue'
import useComputedStyle from '../../../composable/useComputedStyle'
import ButtonComp from '../Button/ButtonComp.vue'
import { onClickOutside } from '@vueuse/core'

defineProps({
  content: {
    type: String
  }
})

const display = ref(false)
const triggerRef = ref<HTMLElement>()
const contentRef = ref()
const contentState = ref({
  x: 0,
  y: 0
})
function setTriggerRef (ele: HTMLElement) {
  triggerRef.value = ele
}

onMounted(() => {
  if (triggerRef.value.triggerRef) {
    contentState.value.y = triggerRef.value.triggerRef.getBoundingClientRect().height
    const margin = parseStyle(useComputedStyle(triggerRef.value.triggerRef, 'margin'), 'px')
    contentState.value.y += (margin)
  }
})

function parseStyle (string: string, unit: string): number {
  if (string) {
    return parseInt(string.replaceAll(unit, ''))
  } else {
    return parseInt(string)
  }
}

const showContent = () => {
  display.value = !display.value
}

onClickOutside(triggerRef, () => {
  display.value = false
})

</script>

<style lang="scss" scoped>
.content {
  position: absolute;
  background-color: $surface-primary;
}
</style>
