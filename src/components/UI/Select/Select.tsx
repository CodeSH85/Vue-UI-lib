import { computed, defineComponent } from 'vue'
import { selectProps } from './props'

export default defineComponent({
  name: 'SelectComp',
  props: selectProps,
  emits: [],
  setup (props, { slots, attrs, emit }) {
    const emptyMsg = computed(() => {
      return 'No Options'
    })
    const optionsTemplate = props.items.map(item => {
      return ( 
        <option value={item.value}>
          { slots.default?.({item}) || item.title }
        </option>
      )
    })
    return () => (
      <>
        <select class={attrs.class}>
          { props.items
            ? optionsTemplate
            : <option value={""} disabled selected>
                { emptyMsg }
              </option>
          }
        </select>
      </>
    )
  }
})
