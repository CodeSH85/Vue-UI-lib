import { type PropType } from 'vue'

export type ButtonType = 'default' | 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger'

export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export type ButtonVariant =
  'default' | 'outlined' | 'flat' | 'text' | 'plain'

export const ButtonProps = {
  type: {
    type: String as PropType<ButtonType>,
    default: 'default'
  },
  variant: {
    type: String as PropType<ButtonVariant>,
    default: 'default'
  },
  size: String,
  block: Boolean,
  disabled: Boolean,
  rounded: {
    type: String as PropType<ButtonSize>
  },
  textColor: String,
  color: String,

  icon: Boolean,
  prependIcon: String,
  appendIcon: String
}
