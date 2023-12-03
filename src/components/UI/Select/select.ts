import { type PropType } from 'vue'

export type SelectVariant =
  'default' | 'outlined' | 'flat' | 'text' | 'plain'

export type SelectItem = {
  title?: string | number
  text?: string | number
}

export type ItemType = string | number | SelectItem | undefined | null | SelectItem[]

export const selectProps = {
  items: {
    type: [Array, Object, Number, String] as PropType<ItemType>,
    default: () => []
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
  }
}
