import { defineComponent } from 'vue'
import { TextInputProps } from './props'
import classes from './textInput.module.scss'

export default defineComponent({
  name: 'TextInput',
  inheritAttrs: false,
  props: TextInputProps,
  emits: ['update:modelValue'],
  setup (props, { attrs, emit, slots }) {
    function handleInput (e: Event) {
      const element = e.target as HTMLInputElement
      emit('update:modelValue', element.value)
    }
    return () => (
      <div class={[
        attrs.class,
        classes['--text-input-wrapper'],
      ]}
      >
        { slots.default ? (
          <div class="">
            { slots.default() }
          </div>
        ) : (
          [
            props.label && <label>{props.label}</label>
            ,
            <input
              onInput={ handleInput }
              type={ props.type }
              size={ 1 }
              value={ props.modelValue }
              class={[
                classes[props.variant]
              ]}
              {...attrs}
            />
          ]
        )}
      </div>
    )
  }
})
