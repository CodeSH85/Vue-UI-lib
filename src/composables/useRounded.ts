import { computed } from 'vue'

export function buildRoundedProp({ rounded=false }) {
  return {
    rounded: {
      type: [Boolean, Number],
      default: rounded,
      validator: (value: any) => {
        return typeof value === 'boolean' || typeof value === 'number'
      }
    }
  }
}

export function useRounded(props, componentName: string) {
  const rounded = props['rounded']
  const roundedClasses = computed(() => {
    if (rounded) {
      return `${componentName}-rounded`
    } else {
      return ``
    }
  })
  return {
    roundedClasses
  }
}
