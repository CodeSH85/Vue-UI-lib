import { computed, defineComponent, ref } from 'vue'
import { SelectProps } from './props'
import classes from './select.module.scss'
import Popper from '../Popper/Popper'
import { onKeyStroke } from '@vueuse/core'

export default defineComponent({
  name: 'SelectComp',
  props: SelectProps,
  emits: ['update:modelValue'],
  setup (props, { slots, attrs, emit }) {
    const emptyMsg = computed(() => {
      return 'No Options'
    })

    const contentRef = ref<HTMLElement | null>(null)
    const itemRefs= ref<HTMLElement[]>([])
    const targetEle = computed(() => {
      return itemRefs.value[currentDataIdx.value]
    })
    function getItemRefs(el: HTMLElement) {
      contentRef.value = el
      if (contentRef.value) itemRefs.value = Array.from(contentRef.value.children)
    }
    const currentDataIdx = ref(-1)
    onKeyStroke('ArrowUp', (e) => {
      e.preventDefault()
      currentDataIdx.value <= 0
        ? currentDataIdx.value = props.items.length - 1
        : currentDataIdx.value -= 1
      if (targetEle.value) targetEle.value.scrollIntoView(false)
    })
    onKeyStroke('ArrowDown', (e) => {
      e.preventDefault()
      currentDataIdx.value === props.items.length - 1
        ? currentDataIdx.value = 0
        : currentDataIdx.value += 1
      if (targetEle.value) targetEle.value.scrollIntoView(false)
    })
    onKeyStroke('Enter', () => {
      emit('update:modelValue', props.items[currentDataIdx.value].value)
      if (targetEle.value) targetEle.value.scrollIntoView(false)
    })
    function clickItem<T>(item: T) {
      emit('update:modelValue', item)
    }
    const handleChange = (event: Event) => {
      const el = event.target as HTMLInputElement
      emit('update:modelValue', el.value)
    }
    const trigger = (e) => {
      return (
        <input
          type="text"
          value={ props.modelValue }
          onClick={ e.toggleContent }
          readonly
        />
      )
    }
    const content = () => {
      return (
        <ul 
          ref={ el => getItemRefs(el) }
        >
          {
            props.items.length
              ? props.items.map((item, idx) => (
                  <li
                    onClick={ () => clickItem(item) }
                    key={ idx }
                    class={classes[
                      currentDataIdx.value === idx 
                        ? '--select-content-item-current'
                        : '--select-content-item-default'
                    ]}
                  >
                    { item?.title }
                  </li>
              ))
              : <li>No Data</li>
          }
        </ul>
      )
    }
    return () => (
      <>
        {
          props.native 
            ? <select 
                onChange={handleChange}
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
            : <Popper>
                {{
                  trigger: ({ toggleContent }) => (
                    slots.trigger
                      ? slots.trigger({ click: toggleContent  })
                      : trigger({ toggleContent })
                  ),
                  default: () => (
                    content()
                  )
                }}
              </Popper>
        }
      </>
    )
  }
})
