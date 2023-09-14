<template>
  <div>
    <div
      class="header"
    >
      <span
        v-for="(col, c) in columns" :key="c"
      >
        {{ col.title }}
      </span>
    </div>
    <div
      class=""
      v-for="(row, r) in rows" :key="r"
      >
      <span
        v-for="(col, c) in columns" :key="c"
      >
        <input :value="row[col.key]"/>
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
import Headers from './SpreadSheet'

const props = defineProps({
  headers: {
    type: Array as PropType<Headers[]>,
    default: () => []
  },
  data: {
    type: Array,
    default: () => []
  }
})

const columns = props.headers
const rows = props.data

</script>

<style lang="scss" scoped>
.header {
  display: flex;
}
</style>
