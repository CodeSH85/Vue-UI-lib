import { defineComponent, ref } from 'vue'
import { onClickOutside } from '@vueuse/core'
export default defineComponent({
  name: 'PulldownComp',
  setup(props, { slots }) {
    const display = ref(false)

    function showContent() {
      display.value = true
    }
    const contentRef = ref<HTMLElement | null>(null)
    function getContentRef(ele: HTMLElement) {
      contentRef.value = ele
    }
    onClickOutside(contentRef, () => {
      console.log('click outside')
      display.value = false
    })
    const events = {
      click: showContent
    }
    return () => (
      <>
        {
          slots.activator 
            ? slots.activator({ on: events })
              .map(activator => (
                <activator
                  // onClick={ showContent }
                >
                </activator>
              ))
            : null
        }
        {
          slots.default && display.value
            ? slots.default().map(content => (
              <content 
                ref={ el => getContentRef(el) }
              >
              </content>
            ))
            : null
        }
      </>
    )
  }  
})
