import { PropType } from "vue"

export const OverlayProps = {
  onClose: {
    type: Function as PropType<() => void>,
    default: () => ({})
  },
  closeOnClick: {
    type: Boolean,
    default: true
  }
}
