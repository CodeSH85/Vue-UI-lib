<template>
  <table
    class="spread-sheet"
    v-bind="$attrs"
  >
    <thead>
      <tr>
        <th>
          <span style="width: 30px;">
            b
          </span>
        </th>
        <th v-for="col in columns" :key="col.key">
          {{ col.title }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr class="" v-for="(row, r) in rows" :key="r">
        <td>
          <span style="width: 30px;">
            {{ r }}
          </span>
        </td>
        <td
          v-for="(col, c) in columns" :key="c"
          :class="'=' === sheet[col.key+r][0] ? 'formula' : '' "
        >
          <input
            :ref="col.key + r"
            @focus="focus($event, col.key, r)"
            @keydown="keydown($event, col.key, r)"
            :value="sheet[col.key+r]"
            @input="updateCell($event, col.key + r)"
            @blur="onBlur($event, col.key + r)"
          />
          <span>
            {{ sheet[col.key+r] }}
          </span>
        </td>
      </tr>
    </tbody>
  </table>
  {{ sheet }}
</template>
<script setup lang="ts">
// import Worker from './worker.ts'
import { ref, PropType, reactive, watch, computed } from 'vue'
import Header from './SpreadSheet'

// console.log(Worker)

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
    type: Array as PropType<Header[]>,
    default: () => []
  },
  data: {
    type: Array as PropType<DumData[]>,
    default: () => []
  }
})

const columns = ref(props.headers)
const rows = ref(props.data)

function buildSheet (): object {
  const obj = {}
  for (let r = 0; r < rows.value.length; r++) {
    for (let c = 0; c < columns.value.length; c++) {
      const key = columns.value[c].key + r
      obj[key] = rows.value[r][columns.value[c].key] ?? ''
    }
  }
  return obj
}

const sheet = reactive(buildSheet())

function updateCell (event, key: string): void {
  const value = event.target.value
  sheet[key] = value
  if (value.startsWith('=')) {
    try {
      // eslint-disable-next-line no-eval
      const result = eval(value.substring(1))
      console.log(result)
    } catch (err) {
      return 0
    }
  }
}

function onBlur (event, key): void {
  return 0
}

const curCol = ref('')
const curRow = ref('')
const inputRef = computed(() => {
  return curCol.value + curRow.value
})

function focus (event, col, row) {
  curCol.value = col
  curRow.value = row
}

function keydown (event, col, row): void {
  const pressedKey = event.key
  switch (pressedKey) {
    case 'ArrowUp':
      curRow.value--
      console.log(inputRef.value)
      break
    case 'ArrowDown':
      curRow.value++
      console.log(inputRef.value)
      break
    default:
      break
  }
}

watch(() => sheet,
  () => {
    console.log('sheet changed')
  },
  { deep: true }
)

</script>
<style lang="scss" scoped>
.spread-sheet {
  table-layout: fixed;
  border-collapse: collapse;
  // width: 500px !important;
  // width: 100%;
}
.header {
  display: flex;
}
.formula {
  background-color: rgb(161, 206, 212);
}
input {
  width: 70px;
}
</style>
