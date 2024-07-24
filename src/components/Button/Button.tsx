import { defineComponent, ref, SetupContext, RenderContext, computed } from 'vue'
import { ButtonProps } from './props'
import styles from './Button.module.scss'
import { buildVariantProps, useVariant } from '../../composables/useVariant'
import { buildRoundedProp, useRounded } from '../../composables/useRounded'

export default defineComponent({
  name: 'ButtonComp',
  directives: {},
  props: {
    ...ButtonProps,
    ...buildVariantProps({ variant: 'flat' }),
    ...buildRoundedProp({ rounded: false })
  },
  emits: ['click', 'focus'],
  setup (props, { slots, attrs, emit, expose }: SetupContext) {
    const { variantClasses } = useVariant(props, 'Button')
    const { roundedClasses } = useRounded(props, 'Button')
    const classList = ref([props.variant, props.size])

    const btnClass = computed(() => {
      return [
        styles['Button'],
        styles[variantClasses.value],
        styles[roundedClasses.value],
        isDisabled.value && styles['Button-disabled']
      ].join(' ')
    })
    const btnAttrs = ref({
      disable: true,
      style: {
        color: props.color
      }
    })
    const isDisabled = computed(() => props.disabled)
    function onClick (e: MouseEvent) {
      if (props.disabled) return
      emit('click', e)
    }
    expose({
      isDisabled
    })
    return {
      isDisabled,
      slots,
      attrs,
      classList,
      btnAttrs,
      onClick,
      btnClass,
    }
  },
  render: (ctx: RenderContext) => {
    return (
      <button
        disabled={ ctx.attrs.disabled }
        onClick={ ctx.onClick }
        class={[
          ctx.btnClass
        ]}
        { ...ctx.btnAttrs }
        { ...ctx.attrs }
      >
        {
          (ctx.slots.prepend && ctx.props.icon)
            && ctx.slots.prepend?.()
        }
        { ctx.slots.default?.() }
      </button>
    )
  }
})
