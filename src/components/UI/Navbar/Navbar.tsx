import { ref, defineComponent, defineAsyncComponent, DefineComponent } from 'vue'
import { NavBarProps, NavItemType } from './props'
import classes from './navbar.module.scss'

export default defineComponent({
  name: 'NavbarComp',
  props: NavBarProps,
  emits: ['update:modelValue'],
  setup(props, { emit, slots }) {
    const Navbar = defineAsyncComponent<DefineComponent<typeof NavBarProps>>(() => import('./Navbar.tsx') as any)
    const displayStates = Object.fromEntries(
      props.items.map(item => [item.key, ref(false)])
    )
    const NavbarItem = (item: NavItemType) => {
      const display = displayStates[item.key];
      function toggleDisplay() {
        display.value = !display.value
      }
      function itemOnClick (val: string | number) {
        emit('update:modelValue', val)
      }
      return (
        <div
          onClick={() => itemOnClick(item.key)}
        >
        { item.children ? (
          <div
            class={classes['--navbar-item-wrapper']}
          >
            <span>
              { item.title }
            </span>
            <button
              onClick={ toggleDisplay }
            >
              { display.value ? 'close' : 'open' }
            </button>
            <Navbar
              style={{
                'display': display.value ? 'block' : 'none'
              }}
              items={ item.children }
            >
            </Navbar>
          </div>
        ) : (
          <div
            class={classes['--navbar-item-wrapper']}
          >
            { item.icon ?? <span>{ item.icon }</span> }
            <span>{ item.title ?? ''}</span>
          </div>
        )}
      </div>
    )
    }
    return () => (
      <nav
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
              <li key={item.key}>
                {
                  slots.default
                  ? slots.default(item)
                  : NavbarItem(item)
                  // : <Navbar items={item}></Navbar>
                }
              </li>
            ))
          }
        </ul>
      </nav>
    )
  }
})
