import { PropType, defineComponent, watchEffect, ref, Ref, computed, nextTick } from 'vue'
import { shift, useFloating } from '@floating-ui/vue'
import { onKeyStroke } from '@vueuse/core'
import classes from './autocomplete.module.scss'
import Popper from '../Popper/Popper'

type AutoCompleteItem = {
  title: string | number
  value: string | number
}

export default defineComponent({
  name: 'AutoComplete',
  props: {
    modelValue: {
      type: String,
      default: ''
    },
    items: {
      type: Array as PropType<AutoCompleteItem[]>,
      default: () => []
    }
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const queryText = ref('')
    const currentDataIdx = ref(-1)
    const inputRef = ref(null)
    const contentRef = ref<HTMLElement | null>(null)
    if (props.modelValue) {
      queryText.value = props.modelValue
    }
    useFloating(inputRef, contentRef, {
      strategy: 'absolute',
      middleware: [ shift() ]
    })
    const filteredItems = computed<AutoCompleteItem[]>(() => {
      return props.items.filter(item => {
        return item.title.toString().toLowerCase().includes(queryText.value)
      })
    })

    const itemRefs= ref<HTMLElement[]>([])
    function getItemRefs(el: HTMLElement) {
      contentRef.value = el
      if (contentRef.value) itemRefs.value = Array.from(contentRef.value.children)
    }
    const targetEle = computed(() => {
      return itemRefs.value[currentDataIdx.value]
    })

    onKeyStroke('ArrowUp', (e) => {
      e.preventDefault()
      currentDataIdx.value <= 0
        ? currentDataIdx.value = filteredItems.value.length - 1
        : currentDataIdx.value -= 1
      if (targetEle.value) targetEle.value.scrollIntoView(false)
    })
    onKeyStroke('ArrowDown', (e) => {
      e.preventDefault()
      currentDataIdx.value === filteredItems.value.length - 1
        ? currentDataIdx.value = 0
        : currentDataIdx.value += 1
      if (targetEle.value) targetEle.value.scrollIntoView(false)
    })
    onKeyStroke('Enter', () => {
      queryText.value = filteredItems.value[currentDataIdx.value].value.toString()
      emit('update:modelValue', queryText.value)
      currentDataIdx.value = 0
      if (targetEle.value) targetEle.value.scrollIntoView(false)
    })
    function handleInput(e: Event) {
      const element = e.target as HTMLInputElement
      queryText.value = element.value.toLowerCase()
      emit('update:modelValue', element.value)
    }
    function handleClick(item: AutoCompleteItem) {
      queryText.value = item.value.toString().toLowerCase()
      emit('update:modelValue', item.value)
    }
    function handleKeyDown(e: KeyboardEvent, fn: () => void) {
      if (e.code === 'Tab' || e.code === 'Escape') fn()
    }

    function listContent() {
      return (
        <div 
          class={[
            classes['--auto-complete-content-container']
          ]}
        >
          <ul 
            ref={ el => getItemRefs(el) }
          >
            {
              filteredItems.value.length
                ? filteredItems.value.map((item, idx) => (
                    <li
                      onClick={ () => handleClick(item) }
                      key={ idx }
                      class={classes[
                        currentDataIdx.value === idx 
                          ? '--auto-complete-content-item-current'
                          : '--auto-complete-content-item-default'
                      ]}
                    >
                      { item.title }
                    </li>
                ))
                : <li>No Data</li>
            }
          </ul>
        </div>
      )
    }
    return () => (
      <Popper>
        {
          {
            trigger: ({ showContent, closeContent }) => (
              <input
                onKeydown={ e => handleKeyDown(e, closeContent) }
                value={ props.modelValue }
                ref={ inputRef }
                onFocus={ showContent }
                onInput={ handleInput }
              />
            ),
            default: () => (
              listContent()
            )
          }
        }
      </Popper>
    )
  }
})
