import { defineComponent } from 'vue'
import { NavBarProps, NavItemType } from './props'
import classes from './navbar.module.scss'

export default defineComponent({
  name: 'NavbarComp',
  props: NavBarProps,
  emits: ['update:modelValue'],
  setup(props, { emit, slots }) {
    function itemOnClick (val: string | number) {
      emit('update:modelValue', val)
    }
    const NavItem = (item: NavItemType) => {
      return (
        <div
          class={['--navbar-item-wrapper']}
          onClick={ () => itemOnClick(item.key) }
        >
          {
            item.icon ?? <span>{ item.icon }</span>
          }
          <span>
            { item.title ?? '' }
          </span>
        </div>
      )
    }
    return () => (
      <div
        class={[
          classes['--navbar-root-wrapper']
        ]}
      >
        <ul
          class={
            classes['--navbar-root-container']
          }
        >
          {
            (props.items && props.items.length) &&
            props.items.map(item => (
              <li>
                {
                  slots.default 
                  ? slots.default(item)
                  : NavItem(item)
                }
              </li>
            ))
          }
        </ul>
      </div>
    )
  }
})
