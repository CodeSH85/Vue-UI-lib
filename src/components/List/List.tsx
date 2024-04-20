import { defineComponent } from 'vue'
import { ListProps } from './props'

export default defineComponent({
  name: 'ListComp',
  props: ListProps,
  setup(props, {emit, attrs, slots}) {
    return () => (
      <props.tag>
        
      </props.tag>  
    )
  }
})
