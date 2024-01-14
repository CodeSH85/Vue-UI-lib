import { defineComponent } from 'vue'
import { DialogProps } from './props'
import Overlay from '../Overlay/Overlay'
import classes from './dialog.module.scss'
import Button from '../Button/Button'

const DialogComp = defineComponent({
  name: 'DialogComp',
  props: DialogProps,
  emits: ['update:show', 'submit'],
  setup (props, { slots, attrs, emit }) {
    function close () {
      emit('update:show')
    }
    function handleKeydown (e: KeyboardEvent) {
      switch (e.key) {
        case 'esc':
          close()
          break
        case 'enter':
          submit()
          break
        default:
          break
      }
    }
    function submit() {
      emit('submit')
    }
    const defaultContent = () => {
      return (
        <div>
          This is Dialog Content
        </div>
      )
    }
    return () => (
      <>
        {
          props.show && (
            <Overlay onClose={close}>
              {{
                default: () => (
                  <div
                    onKeydown={handleKeydown}
                    class={classes.container}
                    role="dialog"
                  >
                    <span>
                      <Button onClick={close}>
                      x
                      </Button>
                    </span>
                    <div>
                      { slots.default 
                        ? slots.default()
                        : defaultContent()
                      }
                    </div>
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
