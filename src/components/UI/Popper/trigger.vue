<template>
  <div class="popper">
    <Button-Comp class="" :ref="el => functionRef(el)"
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

defineOptions({
  name: 'PopperTrigger'
})

const display = ref(false)
const trigger = ref()

const contentPos = ref({
  x: 0,
  y: 0
})

function functionRef (ele: HTMLElement) {
  trigger.value = ele
}
onMounted(() => {
  if (trigger.value.buttonRef) {
    contentPos.value.y = trigger.value.buttonRef.getBoundingClientRect().height
  }
})
const showPopper = () => {
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
