import { defineComponent, ref } from 'vue'
import classes from './menu.module.scss'
import { MenuProps } from './props'
import Pulldown from '../Popper/Popper'
import Button from '../Button/Button'

export default defineComponent({
  name: 'MenuComp',
  props: MenuProps,
  emits: ['update:modelValue'],
  setup (props, { slots, emit }) {
    function clickItem<T>(item: T) {
      console.log(item)
      emit('update:modelValue', item)
    }
    const defaultContent = () => {
      return (
        <div>
          {
            props.items.length && props.items.map(item => (
              <div
                style="background-color: grey;"
                onClick={() => clickItem(item)}
              >
                { 
                  typeof item === 'string' 
                    ? item
                    : item.title
                }
              </div>
            ))
          }
        </div>
      )
    }
    return () => (
      <Pulldown>
        {
          {
            activator: ({ toggleContent }) => (
              slots.activator
              ? slots.activator({ click: toggleContent })
              : 
                <Button
                  onClick={ 
                    toggleContent
                  }
                >
                  Menu
                </Button>
            ),
            default: () => (
              slots.default
                ? slots.default()
                : defaultContent()
            )
          }
        }
      </Pulldown>
    )
  }
})
