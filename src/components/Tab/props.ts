import { PropType } from 'vue'

export interface Tab {
  title: string
  value: string | number
}

export const TabsProps = {
  modelValue: {
    type: [String, Number] as PropType<string | number>
  },
  tabs: {
    type: Array as PropType<Tab[]>,
    default: [],
    required: true
  },
  showArrow: {
    type: Boolean,
    default: false
  },
  fixSize: {
    type: Boolean,
    default: false
  },
  vertical: {
    type: Boolean,
    default: false
  }
} as const
