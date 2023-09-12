<template>
  <slot>
    loading
  </slot>
  <div >
    <table>
      <thead>
        <tr></tr>
      </thead>
      <tbody>
        <tr></tr>
      </tbody>
      <tfoot>
      </tfoot>
    </table>
  </div>
</template>
<script setup lang="ts">
import { PropType } from 'vue'

type ColumnGroupSetting = {
  header: string;
}
type Load = {
  ColumnGroupSetting: Array<string>
}

defineProps({
  fixed: {
    type: Boolean,
    default: true
  },
  Headers: {
    type: Array as PropType<ColumnGroupSetting[] | (() => Load<ColumnGroupSetting[]>) >
  },
  query: {
    type: [Object, String] as PropType<string | object>,
    default: () => ({})
  }
})

</script>
<style scoped>

</style>
