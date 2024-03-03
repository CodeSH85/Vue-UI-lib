import { type PropType } from 'vue'

export type SelectVariant = 'default' | 'outlined' | 'flat' | 'text' | 'plain'

export type SelectItem = {
  title?: string | number,
  value: unknown
}

export type ItemType =  undefined | null | SelectItem[]

export const SelectProps = {
  items: {
    type: Array as PropType<ItemType[]>,
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
  native: {
    type: Boolean,
    default: false
  },
  closeOnClickOutside: {
    type: Boolean,
    default: true
  }
}
