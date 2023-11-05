<template>
  <button
    :class="mini ? 'mini' : ''"
  >
    <slot>
      <span v-if="!mini">
        {{ props.title }}
      </span>
      <span v-else>
        {{ props.title.charAt(0) }}
      </span>
    </slot>
  </button>
</template>
<script setup lang="ts">

const props = defineProps(['title', 'isSub', 'mini'])

</script>
<style lang="scss" scoped>
button {
  transition: 500ms;
}
.mini {
  width: auto;
  text-wrap: wrap;
  padding: $md;
}
.default {

}
</style>
