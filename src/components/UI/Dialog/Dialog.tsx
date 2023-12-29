import { defineComponent } from 'vue'
import { DialogProps } from './props'
import Overlay from '../Overlay/Overlay'
import classes from './dialog.module.scss'

const DialogComp = defineComponent({
  name: 'DialogComp',
  props: DialogProps,
  emits: ['update:show'],
  setup (props, { slots, attrs, emit }) {
    function close () {
      emit('update:show')
    }
    return () => (
      <>
          {
            props.show && (
              <Overlay onClose={close}>
                {{
                  default: () => (
                    <div
                      class={classes.container}
                    >
                      { slots.default?.() }
                    </div>
                  )
                }}
              </Overlay>
            )
          }
      </>
    )
  }
})

export default DialogComp
