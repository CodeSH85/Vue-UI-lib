import { defineComponent, ref } from 'vue'
import { onClickOutside } from '@vueuse/core'
import { shift, useFloating, offset, flip } from '@floating-ui/vue'
import { PopperProps } from './props'

export default defineComponent({
  name: 'PopperComp',
  props: PopperProps,
  setup(props, { slots }) {
    const display = ref(false)
    const triggerRef = ref<HTMLElement | null>(null)
    function getTriggerRef(ele: HTMLElement) {
      triggerRef.value = ele
    }
    const contentRef = ref<HTMLElement | null>(null)
    function getContentRef(ele: HTMLElement) {
      contentRef.value = ele
    }
    onClickOutside(contentRef, () => {
      if (!props.closeOnClickOutside) return
      display.value = false
    }, { ignore: [triggerRef] })

    useFloating(triggerRef, contentRef, {
      // strategy: 'absolute',
      // placement: "bottom",
      // middleware: [ shift() ]
      placement: 'right',
      middleware: [ offset(10), flip(), shift() ],
    })

    function showContent(): void {
      display.value = true
    }
    function closeContent(): void {
      display.value = false
    }
    function toggleContent(): void {
      display.value = !display.value
    }
    function contentClick(): void {
      if (props.closeOnContentClick) closeContent()
    }
    const events = {
      showContent,
      closeContent,
      toggleContent
    }

    return () => (
      <>
        {
          slots.trigger 
            ? slots.trigger({ ...events })
              .map(trigger => (
                <trigger
                  ref={ el => getTriggerRef(el) }
                >
                </trigger>
              ))
            : null
        }
        {
          slots.default && display.value
            ? slots.default().map(content => (
              <content
                style="position: absolute; background-color: white; z-index: 10;"
                onClick={ contentClick }
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
