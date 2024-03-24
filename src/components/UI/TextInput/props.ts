import { PropType } from 'vue'

type TextInputTypes = 'text' | 'number' | 'email' | 'password'
type VariantList = 'outlined' | 'filled' | 'plain' | 'text' | 'default'
type ValueList = string | number | boolean | null | undefined
export const TextInputProps = {
  modelValue: {
    type: String as PropType<ValueList>,
    default: ''
  },
  value: {
    type: String as PropType<ValueList>,
    default: ''
  },
  type: {
    type: String as PropType<TextInputTypes>,
    default: 'text',
    validator: (value: TextInputTypes) => 
      ['text', 'number', 'email', 'password'].includes(value)
  },
  label: {
    type: String as PropType<ValueList>,
    default: ''
  },
  variant: {
    type: String as PropType<VariantList>,
    default: 'default',
    validator: (value: VariantList) => 
      ['outlined', 'filled', 'plain', 'text', 'default'].includes(value)
  },
  colors: {
    type: String
  },
  rounded: {
    type: String
  },
  prependIcon: {
    type: String
  },
  appendIcon: {
    type: String
  },
  clearable: {
    type: Boolean,
    default: true
  },
  clearIcon: {
    type: String,
    default: ''
  }
} as const
