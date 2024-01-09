import { type PropType } from 'vue'

export type SelectVariant =
  'default' | 'outlined' | 'flat' | 'text' | 'plain'

export type SelectItem = {
  title?: string | number,
  value: unknown
}

export type ItemType =  undefined | null | SelectItem[]

export const selectProps = {
  items: {
    type: Array as PropType<ItemType>,
    default: () => []
  },
  modelValue: {
  },
  variant: {
    type: String as PropType<SelectVariant>,
    default: 'default'
  },
  label: {
    type: String
  },
  disabled: {
    type: Boolean,
    default: false
  },
  multiple: {
    type: Boolean,
    default: true
  },
  closeOnClickOutside: {
    type: Boolean,
    default: true
  }
}
