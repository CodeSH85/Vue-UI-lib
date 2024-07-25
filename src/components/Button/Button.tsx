import { defineComponent, ref, SetupContext, RenderContext, computed } from 'vue'
import { ButtonProps } from './props'
import styles from './Button.module.scss'
import { useRender } from '../../composables/useRender'
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
    useRender(() => {
      return (
        <button
          disabled={ props.disabled }
          onClick={ onClick }
          class={[
            btnClass.value
          ]}
          { ...btnAttrs.value }
          { ...attrs }
        >
          {
            ( slots.prepend && props.icon)
              && slots.prepend?.()
          }
          { slots.default?.() }
        </button>
      )
    })
  }
})
