import { defineComponent } from 'vue'
import { TextInputProps } from './props'

export default defineComponent({
  name: 'TextInput',
  props: TextInputProps,
  emits: ['update:modelValue'],
  setup (props, { emit, attrs }) {
    function handleInput (e: Event) {
      const element = e.target as HTMLInputElement
      emit('update:modelValue', element.value)
    }
    return () => (
      <>
        { 
          props.label &&
          <label>{props.label}</label> 
        }
        <input
          {...attrs}
          onInput={handleInput}
          type={props.type}
          value={props.modelValue}
        />
      </>
    )
  }
})
