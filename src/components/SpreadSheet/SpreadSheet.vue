<template>
  <table>
    <thead>
      <tr>
        <th>button</th>
        <th v-for="col in columns" :key="col.key">
          {{ col.title }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr class="" v-for="(row, r) in rows" :key="r">
        <td>{{ r }}</td>
        <td v-for="(col, c) in columns" :key="c">
          <input
            v-model="row[col.key]"
          />
          <!-- @input="updateVal($event, r, col.key)" -->
          <!-- :value="row[col.key]" -->
        </td>
      </tr>
    </tbody>
  </table>
  {{ sheet }}
</template>
<script setup lang="ts">
import { ref, PropType, computed, watch } from 'vue'
import Headers from './SpreadSheet'

interface DumData {
  a: string | undefined
  b: string | undefined
  c: string | undefined
  d: string | undefined
  e: string | undefined
  f: string | undefined
}

const props = defineProps({
  headers: {
    type: Array as PropType<Headers[]>,
    default: () => []
  },
  data: {
    type: Array as PropType<DumData[]>,
    default: () => []
  }
})

// const emit = defineEmits(['updateVal'])
// function updateVal (e, index, key) {
//   emit('updateVal', e.target.value, index, key)
// }

const columns = ref(props.headers)
const rows = ref(props.data)

const sheet = computed(() => {
  const obj = {}
  for (let r = 0; r < rows.value.length; r++) {
    for (let c = 0; c < columns.value.length; c++) {
      const key = columns.value[c].key + r
      obj[key] = rows.value[r][columns.value[c].key] ?? ''
    }
  }
  return obj
})

console.log(sheet.value)

watch(() => sheet,
  () => {
    console.log('sheet changed')
  },
  { deep: true }
)

</script>

<style lang="scss" scoped>
.header {
  display: flex;
}
.formula {
  background-color: '#f0f0f0';
}
</style>
