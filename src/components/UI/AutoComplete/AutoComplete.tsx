import { defineComponent, ref } from "vue"

export default defineComponent({
  name: 'AutoComplete',
  props: {
    modelValue: {
      type: String,
      default: ''
    }
  },
  emits: ['update:modelValue'],
  setup(props, { slots, emit, attrs }) {
    const _display = ref(false)

    function handleFocus() {
      _display.value = true
    }
    function handleInput(e: Event) {
      const element = e.target as HTMLInputElement
      emit('update:modelValue', element.value)
    }
    function listContent() {
      return (
        <div>
          
        </div>
      )
    }
    return () => {
      <div>
        <input 
          onFocus={ handleFocus }
          onInput={ handleInput }
        />
        {
          _display.value 
            ? listContent()
            : null
        }
      </div>
    }
  }
})
