import { computed, defineComponent } from 'vue'
import classes from './checkbox.module.scss'
import Input from '../Input/Input'

export default defineComponent({
  name: 'TextInput',
  inheritAttrs: false,
  props: {
    modelValue: {
      type: [String, Boolean],
      default: false
    },
    value: {
      type: [String, Boolean],
      default: false
    },
    label: {
      type: String,
      default: ''
    }
  },
  emits: ['update:modelValue'],
  setup (props, { emit, attrs }) {
    function handleInput (e: Event) {
      const element = e.target as HTMLInputElement
      emit('update:modelValue', element.checked)
    }
    const _label = computed(() => props.label ? props.label.toString() : undefined)
    return () => (
      <Input
        {...attrs}
        label={ _label.value }
        class={classes['--checkbox-wrapper']}
      >
        {{
          default: ({ id }) => (
            <input
              id={ id }
              type="checkbox"
              checked={ !!props.modelValue ?? props.value }
              onInput={ handleInput }
            />
          )
        }}
      </Input>
    )
  }
})
