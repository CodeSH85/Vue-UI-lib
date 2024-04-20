import { defineComponent, ref } from 'vue'
import { ButtonProps } from './props'
import classes from './button.module.scss'

export default defineComponent({
  name: 'ButtonComp',
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
      slots,
      attrs,
      classList,
      btnAttrs,
      onClick
    }
  },
  render: (ctx) => {
    return (
      <button
        disabled={ ctx.disabled }
        onClick={ ctx.onClick }
        class={ ctx.classList.map(item => classes[item]) }
        { ...ctx.btnAttrs }
        { ...ctx.attrs }
      >
        {
          (ctx.slots.prepend && ctx.props.icon)
            ? (
                ctx.slots.prepend?.()
              )
            : (
              <span></span>
              )
        }
        { ctx.slots.default?.() }
      </button>
    )
  }
})
