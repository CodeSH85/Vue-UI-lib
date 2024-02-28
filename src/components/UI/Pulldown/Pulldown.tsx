import { defineComponent, ref } from 'vue'
import { onClickOutside } from '@vueuse/core'
import { shift, useFloating } from '@floating-ui/vue'

export default defineComponent({
  name: 'PulldownComp',
  setup(props, { slots }) {
    const display = ref(false)
    const activatorRef = ref<HTMLElement | null>(null)
    function getActivatorRef(ele: HTMLElement) {
      activatorRef.value = ele
    }
    const contentRef = ref<HTMLElement | null>(null)
    function getContentRef(ele: HTMLElement) {
      contentRef.value = ele
    }
    onClickOutside(contentRef, () => {
      display.value = false
    })
    useFloating(activatorRef, contentRef, {
      strategy: 'absolute',
      placement: "bottom",
      middleware: [ shift() ]
    })
    function showContent() {
      display.value = true
    }
    function closeContent() {
      display.value = false
    }
    const events = {
      showContent,
      closeContent
    }
    return () => (
      <>
        {
          slots.activator 
            ? slots.activator({ ...events })
              .map(activator => (
                <activator
                  ref={ el => getActivatorRef(el) }
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
