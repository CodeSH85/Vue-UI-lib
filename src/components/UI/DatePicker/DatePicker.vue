<template>
  <div>
    <div class="">
      Year Panel
    </div>
    <div class="setting-container">
      <button @click="setPrevYear">prev</button>
      <div class="">
        {{ currentYear }}
      </div>
      <button @click="setNextYear">next</button>
      {{ getDates }}
    </div>
    <div class="days-container">
      <template v-for="day in getMonthDays()" :key="day">
        <div class="day-item">
          {{ day }}
        </div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Ref, computed, ref, watch } from 'vue'
import dayjs from 'dayjs/esm'

defineOptions({
  name: 'DatePicker'
})

defineProps({
  x: Number,
  y: Number
})
console.log(dayjs().format('YYYY-MM-D'))
const currentDate = new Date().getDate()
const currentMonth = new Date().getMonth() + 1
const currentYear = new Date().getFullYear()

const selectedDate: Ref = ref<string | undefined>()
const selectedMonth: Ref = ref<string | undefined>()
const selectedYear: Ref = ref<string | undefined>()

const getDates = computed(() => {
  return selectedDate.value + selectedMonth.value + selectedYear.value
})

const getMonthDays = () => {
  return new Date(currentYear, currentMonth, 0).getDate()
}

// const getCurrentYear = () => {
//   return new Date().getFullYear()
// }

const setPrevYear = () => {
  selectedYear.value--
}
const setNextYear = () => {
  selectedYear.value++
}

console.log(currentDate, currentMonth, currentYear)

watch(selectedYear, () => {
  // currentYear =
}, { immediate: true })

</script>

<style lang="scss" scoped>
.setting-container {
  display: flex;
}
.days-container {
  max-width: 100px;
  max-height: 100px;
  display: flex;
  flex-wrap: wrap;
}
.day-item {

}
</style>
