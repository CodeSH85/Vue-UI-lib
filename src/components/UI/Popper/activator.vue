<template>
  <div class="activator" ref="activatorRef">
    <slot
      :attrs="$attrs"
    >
    </slot>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const activatorRef = ref<HTMLElement>()

defineOptions({
  name: 'activatorComp'
})

defineExpose({
  activatorRef
})

</script>
<style lang="scss" scoped>
.activator {
  width: fit-content;
  position: relative;
}
</style>
