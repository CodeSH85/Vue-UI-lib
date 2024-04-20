import { computed, defineComponent, ref } from 'vue'
import { DatePickerProps } from './props'

export default defineComponent({
  name: 'DatePicker',
  props: DatePickerProps,
  setup(props, { slots }) {

    const year = ref(new Date().getFullYear())
    const month = ref(new Date().getMonth() + 1)
    const day = ref(new Date().getDay())
    const date = ref(new Date().getDate())
    // const selected = ref<Date>([])
    const dayList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const startDay = computed(() => new Date(year.value, month.value - 1, 1).getDay())
    const daysInMonth = computed(() => {
      const dates = []
      const datesCounts = new Date(year.value, month.value, 0).getDate()
      for (let i = 1; i <= datesCounts; i++) {
        dates.push(i)
      }
      return dates
    })

    const rowsCount = computed(() => Math.ceil((daysInMonth.value.length) / dayList.length))
    // let dayCounter = 1

    // events
    function prev() {
      if (month.value === 0) {
        month.value = 12
      } else {
        month.value--
      }
      console.log(month.value)
    }
    function next() {
      if (month.value === 12) {
        month.value = 1
      } else {
        month.value++
      }
      console.log(month.value)
    }
    function header() {
      return (
        <div class="flex">
          <button onClick={ prev }>
            left
          </button>
          <div>
            { year.value }/
            { month.value }/
            { date.value }/
          </div>
          <button onClick={ next }>
            right
          </button>
        </div>
      )
    }
    function content() {
      const days = []
      const rows = []
      for (let i = 0; i < startDay.value; i++) {
        days.push(<span>nn</span>)
      }
      for (const day of daysInMonth.value) {
        days.push(<span>{day}</span>)
      }
      const remainingCells = 7 - (startDay.value + daysInMonth.value.length) % 7
      for (let i = 0; i < remainingCells; i++) {
        days.push(<span>nn</span>)
      }

      for (let i = 0; i < rowsCount.value; i++) {
        const row = days.slice(i * 7, (i + 1) * 7)
        rows.push(<div class="row">{ row }</div>)
      }
      return rows
    }
    return () => (
      <div>
        {
          slots.header 
            ? slots.header()
            : header()
        }
        <div>
          <div>
            { dayList[day.value] } / { startDay.value }
          </div>
          <div>
            {
              dayList.map((day) => (
                <span>
                  { day.substring(0, 3) }
                </span>
              ))
            }
            {
              content()
            }
          </div>
        </div>
      </div>
    )
  }
})
