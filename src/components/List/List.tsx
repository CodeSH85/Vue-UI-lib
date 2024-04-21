import { defineComponent } from 'vue'
import { ListProps } from './props'

export default defineComponent({
  name: 'ListComp',
  props: ListProps,
  emits: [],
  setup(props, {emit, attrs, slots}) {
    return () => (
      <props.tag>
        {
          slots.item?.()
        }
      </props.tag>  
    )
  }
})
