import { defineComponent, ref } from 'vue'
import classes from './menu.module.scss'
import { MenuProps } from './props'
import Pulldown from '../Pulldown/Pulldown'

export default defineComponent({
  name: 'MenuComp',
  props: MenuProps,
  emits: [],
  setup (props, { slots }) {
    // const show = ref(true)
    // function showMenu () {
    //   show.value = true
    // }
    return () => (
      <Pulldown>
        {
          {
            activator: ({ toggleContent }) => (
              slots.activator
              ? slots.activator({ click: toggleContent })
              : 
                <div class={classes}>
                  <button onClick={ toggleContent }>
                    Menu
                  </button>
                </div>
            ),
            default: () => (
              <div>test</div>
              // slots.default?.()
            )
          }
        }
      </Pulldown>
    )
  }
})
