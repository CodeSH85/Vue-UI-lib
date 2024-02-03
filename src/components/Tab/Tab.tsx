import { defineComponent } from 'vue'
import { TabsProps } from './props'
import Button from '../UI/Button/Button'

export default defineComponent({
  name: 'TabComp',
  props: TabsProps,
  emits: ['setTabValue'],
  setup (props, { slots, attrs, emit }) {
    function setTabValue () {
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
