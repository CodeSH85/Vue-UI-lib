import { defineComponent, computed } from 'vue'
import { TextInputProps } from './props'
// import classes from './textInput.scss'
import './textInput.scss'
import Input from '../Input/Input'
import Icon from '../Icon/Icon'
import Button from '../Button/Button'
import { pickAttrs } from '../../../utils/helpers'

export default defineComponent({
  name: 'TextInput',
  inheritAttrs: false,
  props: TextInputProps,
  emits: ['update:modelValue', 'input'],
  setup (props, { attrs, emit, slots }) {
    // const value = useProxyModel(props, 'modelValue', props.modelValue)
    function handleInput (e: Event) {
      const element = e.target as HTMLInputElement
      emit('update:modelValue', element.value)
      emit('input', e)
    }
    function clearValue() {
      props.modelValue
        ? emit('update:modelValue', '')
        : emit('input', '')
    }
    const [ rootAttrs, inputAttrs ] = pickAttrs(['id', 'class', 'style'], attrs)
    const _label = computed(() => props.label ? props.label.toString() : undefined )
    return () => (
      <Input
        label={ _label.value }
        class={[
          '--text-input-wrapper',
        ]}
        { ...rootAttrs }
      >
        {{
          default: ({ id }) => (
            slots.default
              ? slots.default()
              :
                <div>
                  <input
                    id={ id }
                    onInput={ handleInput }
                    type={ props.type }
                    size={ 1 }
                    value={ props.modelValue || props.value }
                    class={[
                      '--text-input-element'
                    ]}
                    { ...inputAttrs }
                  />
                  <span onClick={ clearValue } class="--text-input-clear-icon">
                    <Icon>{ props.clearIcon || 'mdi-close' }</Icon>
                  </span>
                </div>
          )
        }}
      </Input>
    )
  }
})
