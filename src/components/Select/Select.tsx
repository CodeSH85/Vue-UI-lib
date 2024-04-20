import { computed, defineComponent, ref } from 'vue'
import { SelectProps } from './props'
import classes from './select.module.scss'
import Popper from '../Popper/Popper'
import { onKeyStroke } from '@vueuse/core'
import TextInput from '../TextInput/TextInput'

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
    const closeContent = ref()
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
      console.log(closeContent.value)
      closeContent.value()
    })
    function clickItem<T>(item: T) {
      console.log(item)
      emit('update:modelValue', item[props.valueKey] ?? item)
    }
    const handleChange = (event: Event) => {
      const el = event.target as HTMLInputElement
      emit('update:modelValue', el.value)
    }
    function handleClear() {
      emit('update:modelValue', '')
    }
    const trigger = (e) => {
      return (
        <TextInput
          type="text"
          value={ props.modelValue }
          onClick={ e.showContent }
          onOnBlur={ e.closeContent }
          onOnClear={ handleClear }
          readonly
        />
      )
    }
    const content = (e) => {
      closeContent.value = e.closeContent
      return (
        <ul ref={ el => getItemRefs(el) }>
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
                    { item[props.titleKey] || item }
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
                onChange={ handleChange }
                class={[attrs.class, classes.select]}>
                { props.items
                  ? props.items.map(item =>
                      <option value={ item.value }>
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
                  trigger: ({ toggleContent, showContent }) => (
                    slots.trigger
                      ? slots.trigger({ click: toggleContent  })
                      : trigger({ toggleContent, showContent })
                  ),
                  default: ({ closeContent }) => {
                    return content({ closeContent })
                  }
                }}
              </Popper>
        }
      </>
    )
  }
})
