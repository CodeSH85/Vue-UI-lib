import { defineComponent, ref } from 'vue'
import { ButtonProps } from './props'

import classes from './button.module.scss'

export default defineComponent({
  name: 'ButtonTest',
  props: ButtonProps,
  directives: {},
  // emits: ['click', 'focus'],
  setup (props, { slots, emit }) {
    const classList = ref([props.variant, props.size])
    const btnAttrs = ref({
      disable: true,
      style: {
        color: props.color
      }
    })
    function onClick (e: MouseEvent) {
      if (props.disabled) return
      emit('click')
      // console.log(e)
    }
    return () => (
      <>
        <button
          onClick={ onClick }
          class={classList.value.map(item => classes[item])}
          {...btnAttrs.value}
        >
          { slots.default() ?? 'Button' }
        </button>
      </>
    )
  }
})
