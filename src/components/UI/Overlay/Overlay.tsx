import { PropType, Teleport, defineComponent } from 'vue'
import classes from './overlay.module.scss'

const Overlay = defineComponent({
  name: 'OverlayComp',
  props: {
    onClose: {
      type: Function as PropType<() => void>
    }
  },
  setup (props, { slots, emit }) {
    function close () {
      emit('close')
    }
    return () => (
      <Teleport to={document.body}>
        <div
          onClick={close}
          class={classes.wrapper}>
          { slots.default?.() }
        </div>
      </Teleport>
    )
  }
})

export default Overlay
