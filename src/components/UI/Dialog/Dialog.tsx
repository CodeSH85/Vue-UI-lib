import { defineComponent } from 'vue'
import { DialogProps } from './props'
import Overlay from '../Overlay/Overlay'

const DialogComp = defineComponent({
  name: 'DialogComp',
  props: DialogProps,
  emits: [],
  setup (props, { slots, attrs }) {
    return () => (
      <>
          {
            props.show
              ? (
              <Overlay>
                {{
                  default: () => (
                    <div
                      class={attrs.class}
                    >
                      { slots.default?.() }
                    </div>
                  )
                }}
              </Overlay>
                )
              : (
                <></>
                )
          }
      </>
    )
  }
})

export default DialogComp
