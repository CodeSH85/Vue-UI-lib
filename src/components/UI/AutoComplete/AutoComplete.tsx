import { PropType, defineComponent, nextTick, ref } from 'vue'
import { useFloating } from '@floating-ui/vue'
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
    const inputRef = ref(null)
    const contentRef = ref(null)

    useFloating(inputRef, contentRef, {
      strategy: 'absolute'
    })
    function handleFocus() {
      _display.value = true
      nextTick(() => {
        console.log(contentRef.value)
      })
    }
    function handleBlur() {
      _display.value = false
    }
    function query(text: string) {
      const regex = new RegExp('/gi/')
      
      let match
      console.log(match)
      props.items.forEach(item => {
        match = item.title.toString().match(regex)
      })
      console.log(match)
      return text
    }
    function handleInput(e: Event) {
      const element = e.target as HTMLInputElement
      query(element.value)
      emit('update:modelValue', element.value)
    }
    function listContent() {
      return (
        <div 
          ref={ contentRef }
          class={[
            classes['auto-complete-content-container']
          ]}
        >
          <ul>
            {
              props.items.length
                ? props.items.map(item => (
                    <li>{ item.title }</li>
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
          ref={ inputRef }
          onFocus={ handleFocus }
          onInput={ handleInput }
          onBlur={ handleBlur }
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
