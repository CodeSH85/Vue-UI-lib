import { PropType, defineComponent, watchEffect, ref, Ref, computed, nextTick } from 'vue'
import { shift, useFloating } from '@floating-ui/vue'
import { onKeyStroke, onClickOutside } from '@vueuse/core'
import classes from './autocomplete.module.scss'

type Auto_Complete_item = {
  title: string | number
  value: string | number | boolean
}

export default defineComponent({
  name: 'AutoComplete',
  props: {
    modelValue: {
      type: String,
      default: ''
    },
    items: {
      type: Array as PropType<Auto_Complete_item[]>,
      default: () => []
    }
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const _display = ref(false)
    const queryText = ref('')
    const currentDataIdx = ref(-1)
    const inputRef = ref(null)
    const contentRef = ref<HTMLElement | null>(null)

    useFloating(inputRef, contentRef, {
      strategy: 'absolute',
      middleware: [ shift() ]
    })
    function handleFocus() {
      _display.value = true
    }
    const filteredItems = computed(() => {
      return props.items.filter(item => {
        return item.title.toString().toLowerCase().includes(queryText.value)
      })
    })
    const itemRefs= ref<HTMLElement[]>([])
    function getItemRefs(el: HTMLElement) {
      contentRef.value = el
      itemRefs.value = Array.from(contentRef.value.children)
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
    onKeyStroke('Tab', () => {
      console.log('Tab')
      _display.value = false
    })
    onClickOutside(inputRef, () => {
      _display.value = false
    })

    function handleInput(e: Event) {
      const element = e.target as HTMLInputElement
      queryText.value = element.value.toLowerCase()
      emit('update:modelValue', element.value)
    }
    function listContent() {
      return (
        <div 
          class={[
            classes['--auto-complete-content-container']
          ]}
        >
          <ul ref={ el => getItemRefs(el) }>
            {
              filteredItems.value.length
                ? filteredItems.value.map((item, idx) => (
                    <li
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
      <div>
        <input
          value={ props.modelValue }
          ref={ inputRef }
          onFocus={ handleFocus }
          onInput={ handleInput }
        />
        {
          _display.value
            ? listContent()
            : null
        }
      </div>
    )
  }
})
