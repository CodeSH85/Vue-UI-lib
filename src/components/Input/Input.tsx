import { defineComponent, computed } from 'vue'
import './input.scss'
import { getUid } from '../../utils/getCurrentInstance'

export default defineComponent({
  name: 'InputWrapper',
  props: {
    id: {
      type: [String],
      default: () => ''
    },
    label: {
      type: String,
      default: () => ''
    }
  },
  setup(props, { slots, emit, attrs }) {
    const uid = getUid()
    const id = computed(() => props.id || `--input-${uid}`)

    const label = () => {
      return (
        <label
          class="--input-label"
          for={ id.value }
        >
          { props.label }
        </label>
      )
    }
    return () => (
      <div
        class="--input-wrapper"
      >
        { props.label && label() }
        {
          slots.default?.({ id: id.value })
        }
      </div>
    )
  }
})
