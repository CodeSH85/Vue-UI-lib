import { defineComponent } from 'vue'
import { TabsProps } from './props'
import TabComp from './tab'

export default defineComponent({
  name: 'TabsComp',
  props: TabsProps,
  emits: ['update:modelValue'],
  setup (props, { slots, emit }) {
    function setTab (key: string) {
      emit('update:modelValue', key)
    }
    return () => (
      <nav>
        {
          props.tabs?.length &&
          props.tabs.map(tab => {
            return (
              <TabComp value={tab.key} onSetTabValue={setTab}>
                { tab.title }
              </TabComp>
            )
          })
        }
        { slots.default?.() }
      </nav>
    )
  }
})
