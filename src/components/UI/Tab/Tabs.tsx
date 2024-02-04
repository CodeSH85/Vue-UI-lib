import { defineComponent, onMounted, ref } from 'vue'
import { Tab, TabsProps } from './props'
import classes from './tabs.module.scss'

export default defineComponent({
  name: 'TabsComp',
  props: TabsProps,
  emits: ['update:modelValue'],
  setup (props, { slots, emit }) {
    const _currentTabValue = ref<Tab['value']>()
    const isCurrentTab = (value: Tab['value']) => {
      return value === _currentTabValue?.value
    }
    function setTab(tab: Tab) {
      _currentTabValue.value = tab.value
      emit('update:modelValue', tab.value)
    }
    function setInit() {
      if (props.modelValue) {
        return props.modelValue
      } else if(props.tabs.length) {
        return props.tabs[0].value
      } else {
        return ''
      }
    }
    onMounted(() => {
      _currentTabValue.value = setInit()
    })
    const tabItem = (tab: Tab) => {
      return (
        <div 
          class={
            [
              classes['--tabs-tab-item'],
              isCurrentTab(tab.value) ? classes['--tabs-current'] : ''
            ]
          }
        >
          { slots.prependIcon ? slots.prependIcon() : null }
          { 
            slots.default
              ? slots.default({ tab: tab, current: _currentTabValue.value })
              : <button onClick={ () => setTab(tab) }>
                  { slots.title ? slots.title() : tab.title }
                </button>
          }
          { slots.appendIcon ? slots.appendIcon() : null }
        </div>
      )
    }
    return () => (
      <nav class={ classes['--tabs-container'] }>
        <div class={ classes['--tabs-root'] }>
          { 
            props.tabs.length > 0 
              ? props.tabs.map(tab => tabItem(tab))
              : null
          }
        </div>
      </nav>
    )
  }
})
