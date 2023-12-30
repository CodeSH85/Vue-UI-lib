import { defineComponent } from 'vue'
import { TabProps } from './props'
import Button from '../UI/Button/Button'

export default defineComponent({
  name: 'TabComp',
  props: TabProps,
  emits: ['setTabValue'],
  setup (props, { slots, attrs, emit }) {
    function setTabValue (e: PointerEvent) {
      emit('setTabValue', props.value)
    }
    return () => (
      <Button
        class={attrs.class}
        onClick={setTabValue}
      >
        { slots.default?.() }
      </Button>
    )
  }
})
