import { PropType } from 'vue'

type TextInputTypes = 'text' | 'number' | 'email' | 'password'
type VariantList = 'outlined' | 'filled' | 'plain' | 'text' | 'default'

export const TextInputProps = {
  modelValue: {
    type: [String, Number, Boolean],
    default: false
  },
  type: {
    type: String as PropType<TextInputTypes>,
    default: 'text',
    validators: (value: TextInputTypes) => 
      ['text', 'number', 'email', 'password'].includes(value)
  },
  label: {
    type: [String, Boolean],
    default: false
  },
  variant: {
    type: String as PropType<VariantList>,
    default: 'default',
    validators: (value: VariantList) => 
      ['outlined', 'filled', 'plain', 'text', 'default'].includes(value)
  },
  colors: {
    type: String
  },
  rounded: {
    type: String
  }
}
