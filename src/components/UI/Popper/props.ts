import { PropType } from 'vue'

type OffsetTypes = 'top' | 'right' | 'bottom' | 'left'
type TriggerTypes = 'click' | 'hover' | 'focus' | 'touch'

export const PopperProps = {
  offset: {
    type: String as PropType<OffsetTypes>,
    default: 'bottom'
  },
  triggerType: {
    type: String as PropType<TriggerTypes>,
    default: 'click'
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
