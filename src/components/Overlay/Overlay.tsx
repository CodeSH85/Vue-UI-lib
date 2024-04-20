import { Teleport, defineComponent } from 'vue'
import classes from './overlay.module.scss'
import { OverlayProps } from './overlayProps'

const Overlay = defineComponent({
  name: 'OverlayComp',
  props: OverlayProps,
  emits: ['close'],
  setup (props, { slots, emit }) {
    function close (e: Event) {
      if (!props.closeOnClick) return
      if (e.target === e.currentTarget) {
        emit('close')
      }
    }
    return () => (
      <Teleport disabled={ true } to={ document.body }>
        <div
          onClick={ close }
          class={ classes.wrapper }>
          { slots.default?.() }
        </div>
      </Teleport>
    )
  }
})

export default Overlay
