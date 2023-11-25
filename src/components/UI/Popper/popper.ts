import { PropType } from 'vue'

export type popperOffset = 'left' | 'bottom' | 'right' | 'top'

export const PopperProps = {
  offset: {
    type: String as PropType<popperOffset>,
    default: 'bottom'
  },
  clickOnClose: {
    type: Boolean,
    default: false
  },
  wrap: Boolean
}
