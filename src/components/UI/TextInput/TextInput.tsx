import { defineComponent, computed, ref } from 'vue'
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
  emits: ['update:modelValue', 'onInput', 'onFocus', 'onBlur', 'onClear'],
  setup (props, { attrs, emit, slots }) {
    const isFocus = ref(false)
    const isHover = ref(false)
    // const value = useProxyModel(props, 'modelValue', props.modelValue)
    function handleInput (e: Event) {
      const element = e.target as HTMLInputElement
      emit('update:modelValue', element.value)
      emit('onInput', e)
    }
    function handleFocus() {
      isFocus.value = true
      emit('onFocus')
    }
    function handleBlur() {
      isFocus.value = false
      emit('onBlur')
    }
    function handleClear() {
      props.modelValue
        ? emit('update:modelValue', '')
        : emit('onInput', '')
      emit('onClear')
    }
    function handleMouseover() {
      isHover.value = true
    }
    function handleMouseleave() {
      isHover.value = false
    }
    const isClearable = computed<boolean>(() => {
      return !!((props.value || props.modelValue) && props.clearable && (isHover.value || isFocus.value))
    })
    const [ rootAttrs, inputAttrs ] = pickAttrs(['id', 'class', 'style'], attrs)
    const _label = computed(() => props.label ? props.label.toString() : undefined )
    return () => (
      <Input
        label={ _label.value }
        class={['--text-input-wrapper', props.class]}
        { ...rootAttrs }
      >
        {{
          ...slots,
          default: ({ id }) => (
            slots.default
              ? slots.default()
              :
                <div
                  class="--text-input-container"
                  onMouseover={ handleMouseover }
                  onMouseleave={ handleMouseleave }
                >
                  <input
                    id={ id }
                    onInput={ handleInput }
                    type={ props.type }
                    size={ 1 }
                    value={ props.modelValue || props.value }
                    class={[
                      '--text-input-element',
                    ]}
                    onFocus={ handleFocus }
                    onBlur={ handleBlur }
                    { ...inputAttrs }
                  />
                  {
                    isClearable.value &&
                    <span onClick={ handleClear } class="--text-input-clear-icon">
                      <Icon>{ props.clearIcon || 'mdi-close' }</Icon>
                    </span>
                  }
                </div>
          )
        }}
      </Input>
    )
  }
})
