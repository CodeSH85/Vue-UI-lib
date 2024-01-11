import { computed, defineComponent, watch } from 'vue'
import { selectProps } from './props'
import classes from './select.module.scss'

export default defineComponent({
  name: 'SelectComp',
  props: selectProps,
  emits: ['update:modelValue'],
  setup (props, { slots, attrs, emit }) {
    const emptyMsg = computed(() => {
      return 'No Options'
    })
    const handleChange = (event: Event) => {
      const el = event.target as HTMLInputElement
      emit('update:modelValue', el.value)
    }
    return () => (
      <>
        <select onChange={handleChange}
          class={[attrs.class, classes.select]}>
          { props.items
            ? props.items.map(item =>
                <option value={item.value}>
                  { slots.default?.({item}) || item.title }
                </option>
              )
            : <option value={""} disabled selected>
                { emptyMsg }
              </option>
          }
        </select>
      </>
    )
  }
})
