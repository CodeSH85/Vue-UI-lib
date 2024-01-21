import { defineComponent } from 'vue'
import { NavBarProps, NavItemType } from './props'
import classes from './navbar.module.scss'

export default defineComponent({
  // name: 'NavBar',
  props: NavBarProps,
  emits: ['update:modelValue'],
  setup(props, { attrs, emit, slots }) {
    function itemOnClick (val: string | number) {
      emit('update:modelValue', val)
    }
    const NavItem = (item: NavItemType) => {
      return (
        <div
          class={[
            '--navbar-item-wrapper'
          ]}
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
    return () => {
      <h1>123</h1>
      // <nav class={[
      //   classes['--navbar-root-wrapper']
      // ]}>
      //   <h1 style="color: black; ">test</h1>
      //   <ul class={classes['--navbar-root-container']}>
      //     {
      //       props.items?.length ?? 
      //       props.items?.map(item => (
      //         <li>
      //           {
      //             slots.default 
      //             ? slots.default() 
      //             : NavItem(item)
      //           }
      //         </li>
      //       ))
      //     }
      //   </ul>
      // </nav>
    }
  }
})
