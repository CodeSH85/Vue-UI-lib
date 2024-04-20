import { defineComponent } from 'vue'
import { WindowProps } from './props'

export default defineComponent({
  name: 'WindowComp',
  props: WindowProps,
  emits: [],
  setup (props, { slots, emit }) {

    return {
      props,
      slots,
      emit
    }
  },
  return (ctx) {
    <>
      <div>
        { ctx.slots.default?.() }
      </div>
    </>
  }
})
