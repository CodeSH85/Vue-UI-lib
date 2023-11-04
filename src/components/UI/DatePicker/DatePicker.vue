<template>
  <div>
    <div class="">
      display
    </div>
    <div class="">
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
import { Ref, computed, ref } from 'vue'
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

const setPrevYear = () => {
  selectedYear.value--
}
const setNextYear = () => {
  selectedYear.value++
}

console.log(currentDate, currentMonth, currentYear, getMonthDays)

</script>

<style lang="scss" scoped>
.days-container {
  max-width: 100px;
  max-height: 100px;
  display: flex;
  flex-wrap: wrap;
}
.day-item {

}
</style>
