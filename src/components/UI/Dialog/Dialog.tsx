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
        case 'Escape':
          close()
          break
        case 'Enter':
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
        <>
          <div class={classes['header']}>
            <span>
              Dialog
            </span>
            <span>
              <Button onClick={ close }>x</Button>
            </span>
          </div>
          <div class={classes['content']}>
            Dialog content here
          </div>
          <div class={classes['footer']}>
            <Button>Cancel</Button>
            <Button>Submit</Button>
          </div>
        </>
      )
    }
    return () => (
      <>
        { props.show && (
          <Overlay onClose={ close }>
            {{
              default: () => (
                <div
                  class={classes['root']}
                  onKeydown={ handleKeydown }
                  tabindex={ 0 }
                  role="dialog"
                >
                  { slots.default 
                    ? slots.default()
                    : defaultContent()
                  }
                </div>
              )
            }}
          </Overlay>
        )}
      </>
    )
  }
})

export default DialogComp
