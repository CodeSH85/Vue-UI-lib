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
        <div class=""
          style="width: 70px; height: 1.3em; border: 1px solid rgb(120, 120, 120)"
        >
          <input
            :ref="el => functionRef(el, col, row)"
            @keydown="keydown($event, col, row)"
            @input="updateCell($event, col + row)"
            @blur="onBlur($event, col + row)"
          />
          <span>
            {{ sheet[col+row] }}
          </span>
        </div>
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

for (let col = 'A'; col <= props.colRange; col = String.fromCharCode(col.charCodeAt(0) + 1)) {
  columns.value.push(col)
}
for (let row = 1; row <= props.rowRange; row++) {
  rows.value.push(row)
}

type Sheet = {
  [coord: string]: string | null
}
const sheet = reactive<Sheet>({})

function updateCell (event: Event, key: string) {
  // const value = event.target.value
  return null
}

function onBlur (event: FocusEvent, key: string) {
  const value = event.target.value
  if (value.startsWith('=')) {
    try {
      // TODO: use worker
      for (const coord in sheet) {
        if (sheet[coord]) {
          sheet[coord] = value
        }
        const match = /\$?[A-Za-z]+[1-9][0-9]*\b/.exec(value)
        if (match && match[0]) {
          return
        }
      }
      // eslint-disable-next-line no-eval
      const result = eval(value.substring(1))
      sheet[key] = result
    } catch (err) {
      return null
    }
  }
}

const curCol = ref<string>('')
const curRow = ref<number>(0)
const inputRef = computed<string>(() => {
  return curCol.value + curRow.value
})

type ele = {
  [cor: string]: HTMLInputElement,
}

const elements = ref<ele>({})
const functionRef = (el: HTMLAllCollection, col: string, row: string) => {
  // elements.value.push(el) // infinite loop
  elements.value[col + row] = el
}

function keydown (event: KeyboardEvent, col: string, row: number): void {
  curCol.value = col
  curRow.value = row
  const pressedKey = event.key
  switch (pressedKey) {
    case 'ArrowUp':
      curRow.value--
      break
    case 'ArrowDown':
      curRow.value++
      break
    default:
      break
  }
  if (elements.value[inputRef.value]) {
    elements.value[inputRef.value].focus()
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
  position: absolute;
  border: 0;
  padding: 0;
  width: 70px;
  color: transparent;
  background: transparent;
  &:focus {
    color: #111;
    background: #efe;
  }
}
</style>
