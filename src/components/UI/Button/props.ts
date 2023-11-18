import { type PropType } from 'vue'

export type ButtonType = 'default' | 'primary' | 'success' | 'warning' | 'danger'

export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export type ButtonVariant =
  'default' | 'outlined' | 'filled' | 'flat' | 'elevated' | 'plain'

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
  round: Boolean,
  textColor: String,
  color: String
}
