import type { PropType } from 'vue'

export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export const ButtonProps = {
  type: {
    type: String,
    default: 'default'
  },
  size: {
    type: String as PropType<ButtonSize>,
    default: 'md'
  },
  block: Boolean,
  disabled: Boolean,
  textColor: String,
  color: String,

  icon: Boolean,
  prependIcon: String,
  appendIcon: String
}
