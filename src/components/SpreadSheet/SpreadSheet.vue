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
        <th v-for="col in columns" :key="col">
          {{ col }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr class="" v-for="(row, r) in rows" :key="r">
        <td>
          <span style="width: 30px;">
            {{ row }}
          </span>
        </td>
        <td
          v-for="(col, c) in columns" :key="c"
          :class="'=' === sheet[col+row] ? 'formula' : '' "
        >
        <!-- :ref="col.key + r" -->
          <input
            :ref="el => functionRef(el, col, row)"
            @keydown="keydown($event, col, row)"
            :value="sheet[col+row]"
            @input="updateCell($event, col + row)"
            @blur="onBlur($event, col + row)"
          />
          <span>
            {{ sheet[col+row] }}
          </span>
        </td>
      </tr>
    </tbody>
  </table>
  {{ sheet }}
</template>
<script setup lang="ts">
// import Worker from './worker.ts'
import { ref, reactive, watch, computed } from 'vue'

const props = defineProps({
  colRange: {
    type: String,
    default: 'H'
  },
  rowRange: {
    type: Number,
    default: 10
  }
})

const columns = ref<string[]>([])
const rows = ref<number[]>([])

for (let col = 'A'; col <= props.colRange; col = String.fromCharCode(col.charCodeAt() + 1)) {
  columns.value.push(col)
}
for (let row = 1; row <= props.rowRange; row++) {
  rows.value.push(row)
}

function buildSheet (): object {
  const obj = {}
  for (let r = 0; r < rows.value.length; r++) {
    for (let c = 0; c < columns.value.length; c++) {
      const key = columns.value[c] + r
      obj[key] = rows.value[r][columns.value[c]] ?? ''
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

const elements = ref({})
const functionRef = (el, col, row) => {
  // elements.value.push(el) // infinite loop
  elements.value[col + row] = el
}
console.log(elements.value)
const minCol = 'A'
const maxCol = props.colRange // Adjust as needed
const minRow = 1 // Adjust as needed
const maxRow = props.rowRange // Assuming props.rowRange is the maximum row value
function keydown (event, col, row): void {
  curCol.value = col
  curRow.value = row
  if (col >= minCol &&
    col <= maxCol &&
    row >= minRow &&
    row <= maxRow) {
    const pressedKey = event.key
    switch (pressedKey) {
      case 'ArrowUp':
        if (row > minRow) {
          curRow.value--
        }
        break
      case 'ArrowDown':
        if (row < maxRow) {
          curRow.value++
        }
        break
      case 'ArrowLeft':
        if (col > minCol) {
          curCol.value = String.fromCharCode(curCol.value.charCodeAt(0) - 1)
        }
        break
      case 'ArrowRight':
        if (col < maxCol) {
          curCol.value = String.fromCharCode(curCol.value.charCodeAt(0) + 1)
        }
        break
      default:
        break
    }
  }
  elements.value[inputRef.value].focus()
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
