import { defineComponent } from 'vue'

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
  setup (props, { emit }) {
    function handleInput (e: Event) {
      const element = e.target as HTMLInputElement
      emit('update:modelValue', element.checked)
    }
    return () => (
      <div>
        { props.label ??
          <label>
            { props.label }
          </label>
        }
        <input
          type="checkbox"
          checked={!!props.modelValue ?? props.value}
          onInput={handleInput}
        >
        </input>
      </div>
    )
  }
})
