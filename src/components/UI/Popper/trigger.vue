<template>
  <div class="trigger" ref="triggerRef">
    <slot >
    </slot>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const triggerRef = ref<HTMLElement>()

defineOptions({
  name: 'PopperTrigger'
})

defineExpose({
  triggerRef
})

</script>
<style lang="scss" scoped>
.trigger {
  width: fit-content;
  position: relative;
}
</style>
