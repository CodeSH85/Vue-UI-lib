import { PropType } from 'vue'

export const DialogProps = {
  modelValue: {
    type: Boolean,
    default: false
  },
  show: {
    type: Boolean,
    default: false,
    required: true
  },
  fullscreen: {
    type: Boolean,
    default: false
  },
  overlay: {
    type: Boolean,
    default: true
  },
  onOpen: {
    type: Function as PropType<() => void>
  },
  onClose: {
    type: Function as PropType<() => void>
  }
}
