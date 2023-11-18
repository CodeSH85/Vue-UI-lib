<template>
  <div class="popper">
      <Button-Comp
      :ref="el => functionRef(el)"
      @click="showPopper"
    >
      click me
    </Button-Comp>
    <div
      v-show="display"
      class="content-container"
      :style="{
        left: contentPos.x + 'px',
        top: contentPos.y + 'px'
      }"
    >
      <slot>
        {{ contentPos }}
      </slot>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import ButtonComp from '../Button/ButtonComp.vue'
import useComputedStyle from '../../../composable/useComputedStyle.ts'

defineOptions({
  name: 'PopperTrigger'
})

const display = ref(false)
const triggerRef = ref()

const contentPos = ref({
  x: 0,
  y: 0
})

function functionRef (ele: HTMLElement) {
  triggerRef.value = ele
}

onMounted(() => {
  if (triggerRef.value.buttonRef) {
    contentPos.value.y = triggerRef.value.buttonRef.getBoundingClientRect().height
    const margin = parseStyle(useComputedStyle(triggerRef.value.buttonRef, 'margin'))
    contentPos.value.y += (margin)
  }
})

function parseStyle (string: string, unit: string) {
  if (string) {
    return parseInt(string.replaceAll(unit, ''))
  }
}

const showPopper = () => {
  console.log(useComputedStyle(triggerRef.value.buttonRef, 'margin'))
  display.value = !display.value
}

</script>
<style lang="scss" scoped>
.popper {
  position: relative;
}
.content-container {
  position: absolute;
  padding: $sm;
  background: $white;
  z-index: 99;
  border: 1px solid $gray-200;
}
</style>
