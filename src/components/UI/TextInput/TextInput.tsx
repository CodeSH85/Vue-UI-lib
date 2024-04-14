import { defineComponent, computed, ref, nextTick } from 'vue'
import { TextInputProps } from './props'
import './textInput.scss'
import Input from '../Input/Input'
import Icon from '../Icon/Icon'
import { pickAttrs } from '../../../utils/helpers'
import { useModel } from '../composable/useModel'

export default defineComponent({
  name: 'TextInput',
  inheritAttrs: false,
  props: TextInputProps,
  emits: {
    'update:modelValue': (val: string) => true,
    'onClear': () => true
  },
  setup (props, { attrs, emit, slots }) {
    const inputRef = ref<HTMLInputElement>()
    const isFocus = ref(false)
    const isHover = ref(false)

    const { model } = useModel(props, 'modelValue')

    function onInput (e: Event) {
      const element = e.target as HTMLInputElement
      model.value = element.value
    }
    function onFocus() {
      if (!isFocus.value) isFocus.value = true
    }
    function onBlur() {
      isFocus.value = false
    }
    function onClear() {
      model.value = ''
      inputRef.value?.focus()
      emit('onClear')
    }
    function mouseover() {
      isHover.value = true
    }
    function mouseleave() {
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
                  onMouseover={ mouseover }
                  onMouseleave={ mouseleave }
                >
                  <input
                    ref={ inputRef }
                    id={ id }
                    onInput={ onInput }
                    type={ props.type }
                    size={ 1 }
                    value={ model.value }
                    class={[
                      '--text-input-element',
                    ]}
                    onFocus={ onFocus }
                    onBlur={ onBlur }
                    { ...inputAttrs }
                  />
                  {
                    isClearable.value &&
                    <span onClick={ onClear } class="--text-input-clear-icon">
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
