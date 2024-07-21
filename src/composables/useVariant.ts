import { hasProp } from '../utils/helpers'
import { computed } from 'vue'
import type { PropType } from 'vue'

export const ValidVariants = [
  'elevated',
  'flat',
  'outlined',
  'text',
  'plain',
] as const

export type Variant = typeof ValidVariants[number]

export function buildVariantProps({ variant='flat' }) {
  return {
    color: String,
    variant: {
      type: String as PropType<Variant>,
      default: variant,
      validator: (value: any) => ValidVariants.includes(value)
    }
  }
}

export function useVariant(props, componentName: string) {
  const variantValue = props.variant
  const variantClasses = computed(() => {
    return `${componentName}-variant-${variantValue}`
  })
  return {
    variantClasses
  }
}
