import { PropType } from 'vue';

export interface NavItemType {
  key: string | number
  title?: string
  icon?: string
  children?: NavItemType[]
}

export const NavBarProps = {
  items: {
    type: Array as PropType<NavItemType[]>
  },
  modelValue: {
    type: String
  },
  group: {
    type: String
  },
  expand: {
    type: String
  },
  direction: {
    type: String,
    default: 'left',
    validator: (val: string) => {
      return ['left', 'top', 'right', 'left'].includes(val)
    }
  }
} as const
