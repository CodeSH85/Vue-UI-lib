import { ref, defineComponent, defineAsyncComponent, DefineComponent } from 'vue'
import { NavBarProps, NavItemType } from './props'
import { onClickOutside } from '@vueuse/core'
import classes from './navbar.module.scss'
import Icon from '../Icon/Icon'

export default defineComponent({
  name: 'NavbarComp',
  props: NavBarProps,
  emits: ['update:modelValue'],
  setup(props, { emit, slots }) {
    const Navbar = defineAsyncComponent<DefineComponent<typeof NavBarProps>>(() => import('./Navbar') as any)
    const displayStates = Object.fromEntries(
      props.items.map(item => [item.key, ref(false)])
    )

    const _currentItem = ref<NavItemType>()
    function setInit() {
      if (props.modelValue) {
        return props.modelValue
      } else if (props.items.length) {
        return props.items[0]
      } else {
        return { key: '' }
      }
    }
    _currentItem.value = setInit()

    function isCurrentItem(itemKey: NavItemType['key']) {
      return itemKey === _currentItem.value.key
    }
    const NavbarItem = (item: NavItemType) => {
      const display = displayStates[item.key];
      function toggleDisplay() {
        display.value = !display.value
      }
      function itemOnClick (item: NavItemType) {
        console.log('Nav item selected:', item)
        _currentItem.value = item
        emit('update:modelValue', item)
      }
      return (
        <div>
        { item.children 
          ? (
          <div>
            <div
              class={ classes['--navbar-item-wrapper'] }
              onClick={ toggleDisplay }
            >
              { item.icon ? <Icon class={classes['--navbar-item-icon']}>{item.icon}</Icon> : null }
              <span>{ item.title }</span>
              { 
                display.value 
                ? <Icon>mdi-chevron-down</Icon>
                : <Icon>mdi-chevron-right</Icon>
              }
            </div>
            <Navbar
              style={{
                'display': display.value ? 'block' : 'none',
                'margin-left': '.5em'
              }}
              items={ item.children }
            >
            </Navbar>
          </div>
        ) : (
          <div
            class={[
              classes['--navbar-item-wrapper'],
              isCurrentItem(item.key) ? classes['--navbar-item-current'] : ''
            ]}
            onClick={ () => itemOnClick(item) }
          >
            { item.icon ? <Icon class={classes['--navbar-item-icon']}>{item.icon}</Icon> : null }
            <span>{ item.title ?? ''}</span>
          </div>
        )}
        </div>
      )
    }
    return () => (
      <nav class={ classes['--navbar-root-wrapper'] }>
        <ul class={ classes['--navbar-root-container'] }>
          {
            (props.items && props.items.length) ?
            props.items.map(item => (
              <li key={ item.key }>
                {
                  slots.default
                  ? slots.default({item})
                  : NavbarItem(item)
                }
              </li>
            ))
            : null
          }
        </ul>
      </nav>
    )
  }
})
