import { defineComponent, ref } from 'vue'
import { ButtonProps } from './props'

import classes from './button.module.scss'

export default defineComponent({
  name: 'ButtonTest',
  directives: {},
  props: ButtonProps,
  emits: ['click', 'focus'],
  setup (props, { slots, attrs, emit }) {
    const classList = ref([props.variant, props.size])
    const btnAttrs = ref({
      disable: true,
      style: {
        color: props.color
      }
    })
    function onClick (e: MouseEvent) {
      if (props.disabled) return
      emit('click', e)
    }
    return {
      classList,
      btnAttrs,
      onClick
    }
  },
  render (ctx) {
    return (
      <button
        disabled={this.$props.disabled}
        onClick={ ctx.onClick }
        class={ctx.classList.map(item => classes[item])}
        {...ctx.btnAttrs}
        {...this.$attrs}
      >
        {
          (this.$slots.prepend && this.$props.icon)
            ? (
                this.$slots.prepend?.()
              )
            : (
              <span></span>
              )
        }
        { this.$slots.default?.() }
      </button>
    )
  }
})
