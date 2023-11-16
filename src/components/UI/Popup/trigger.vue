<template>
  <div class="popper" ref="popper">
    <Button-Comp class="" @click="showPopper">
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
  name: 'PopupTrigger'
})

const display = ref(false)
const popper = ref(null)

const contentPos = ref({
  x: 0,
  y: 0
})

onMounted(() => {
  contentPos.value.x = popper.value.getBoundingClientRect().x
  contentPos.value.y = popper.value.getBoundingClientRect().y
})

const showPopper = () => {
  console.log(popper.value.getBoundingClientRect())
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
