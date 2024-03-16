import { defineComponent, computed } from 'vue'

import { getUid } from '../../../utils/getCurrentInstance'

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
    const id = computed(() => props.id || `input-${uid}`)

    const label = () => {
      return (
        <label for={ id.value }>
          { props.label }
        </label>
      )
    }
    return () => (
      <>
        <div>
          { props.label && label() }
          {
            slots.default?.({ id: id.value })
          }
        </div>
      </>
    )
  }
})
