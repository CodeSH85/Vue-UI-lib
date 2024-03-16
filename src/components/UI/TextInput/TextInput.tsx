import { defineComponent, computed } from 'vue'
import { TextInputProps } from './props'
import classes from './textInput.module.scss'
import Input from '../Input/Input'
import Icon from '../Icon/Icon'
import Button from '../Button/Button'

export default defineComponent({
  name: 'TextInput',
  inheritAttrs: false,
  props: TextInputProps,
  emits: ['update:modelValue', 'input'],
  setup (props, { attrs, emit, slots }) {
    function handleInput (e: Event) {
      const element = e.target as HTMLInputElement
      props.modelValue
        ? emit('update:modelValue', element.value)
        : emit('input', e)
    }
    function clearValue() {
      props.modelValue
        ? emit('update:modelValue', '')
        : emit('input', '')
    }
    const _label = computed(() => props.label ? props.label.toString() : undefined )
    return () => (
      <Input
        label={ _label.value }
        class={[
          attrs.class,
          classes['--text-input-wrapper'],
          classes[props.variant]
        ]}
      >
        {{
          default: ({ id }) => (
            slots.default
              ? slots.default()
              :  [ 
                <input
                  id={ id }
                  onInput={ handleInput }
                  type={ props.type }
                  size={ 1 }
                  value={ props.modelValue ?? props.value }
                  class={[
                    classes['--text-input-default']
                  ]}
                  { ...attrs }
                />,
                <Button onClick={ clearValue }>
                  <Icon>mdi-close</Icon>
                </Button>
              ]
          )
        }}
      </Input>
    )
  }
})
