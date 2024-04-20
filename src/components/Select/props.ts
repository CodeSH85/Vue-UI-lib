import { type PropType } from 'vue'

export type SelectVariant = 'default' | 'outlined' | 'flat' | 'text' | 'plain'

export type SelectItem = {
  title?: string | number,
  value?: string | number,
  disabled?: boolean,
  [key: string]: any
}

export type ItemType =  undefined | null | SelectItem[]

export const SelectProps = {
  items: {
    type: Array as PropType<(SelectItem[] | string[])>,
    default: () => []
  },
  modelValue: {
    type: String as PropType<string | SelectItem[] | string[]>,
    default: ''
  },
  variant: {
    type: String as PropType<SelectVariant>,
    default: 'default'
  },
  titleKey: {
    type: String,
    default: 'title'
  },
  valueKey: {
    type: String,
    default: 'value'
  },
  label: {
    type: String,
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  },
  multiple: {
    type: Boolean,
    default: false
  },
  clearable: {
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
  },
  closeOnContentClick: {
    type: Boolean,
    default: true
  }
}
