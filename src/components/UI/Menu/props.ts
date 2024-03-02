import { PropType } from 'vue'

type MenuItem = {
  title: string,
  value: string,
  icon?: string,
  [key: string]: string | undefined
}

export const MenuProps = {
  items: {
    type: Array as PropType<(string | MenuItem)[]>,
    default: () => []
  },
  modelValue: {
    type: [String, Object] as PropType<MenuItem>,
    default: ''
  },
  closeOnContentClick: {
    type: Boolean,
    default: true
  },
  closeOnClickOutside: {
    type: Boolean,
    default: true
  }
} as const
