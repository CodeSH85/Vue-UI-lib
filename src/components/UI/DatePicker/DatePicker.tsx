import { computed, defineComponent, ref } from 'vue'
import { DatePickerProps } from './props'

export default defineComponent({
  name: 'DatePicker',
  props: DatePickerProps,
  setup(props, { attrs, emit, slots }) {

    const date = ref(new Date().getDate())
    const month = ref(new Date().getMonth() + 1)
    const year = ref(new Date().getFullYear())

    const daysInMonth = computed(() => {
      const days = []
      const dates = new Date(year.value, month.value, 0).getDate()
      for (let i = 1; i <= dates; i++) {
        days.push(i)
      }
      return days
    })
    function header() {
      return (
        <div class="flex">
          <span>
            left
          </span>
          <div>
            { year.value }/
            { month.value }/
            { date.value }
          </div>
          <span>
            right
          </span>
        </div>
      )
    }
    return () => (
      <div>
        {
          slots.header 
            ? slots.header()
            : header()
        }
        <div>
          {
            daysInMonth.value.map(day => (
              <span key={day} class="day-item">{day}</span>
            ))
          }
        </div>
      </div>
    )
  }
})
