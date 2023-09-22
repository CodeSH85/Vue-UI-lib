<template>
  <div v-if="row && columns">

    <template v-for="col in columns" :key="col.key">
      <Text-input
        variant="filled"
        :label="col.title"
        v-model="row[col.key]"
        draggable="true"
       />

    </template>
  </div>
</template>

<script setup lang="ts">
import { ref, PropType } from 'vue'
import TextInput from './UI/TextInput.vue'

interface ColModel {
  key: string;
  title: string;
  dataType?: string;
}
interface RowModel {
  [rowProp: string]: string | number;
}

const props = defineProps({
  header: {
    type: [Array] as PropType<ColModel[] | undefined>
  },
  data: {
    type: [Object] as PropType<RowModel | undefined>
  }
})

const columns = ref(props.header)
const row = ref(props.data)

</script>

<style lang="scss" scoped>

</style>
