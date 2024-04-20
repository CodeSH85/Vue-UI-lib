import { defineComponent } from 'vue'
import { WindowProps } from './props'

export default defineComponent({
  name: 'WindowItemComp',
  props: {},
  emits: ['update:modelValue'],
  setup (props, { slots, emit }) {
    return () => (
      <>
        <div>
          { slots.default?.() }
        </div>
      </>
    )
  }
})
