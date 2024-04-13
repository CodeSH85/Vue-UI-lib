// Learned from Vuetify

import { ref, computed, toRaw } from 'vue'
import { getCurrentInstance } from '../utils/getCurrentInstance'

export default function useModel(
  props,
  prop,
  defaultValue?,
  fromIn = (v) => v,
  fromOut = (v) => v
) {

  const instance = getCurrentInstance('useModel')

  // the internal state manage by component itself.
  const internal = ref(props[prop] !== undefined ? props[prop] : defaultValue)

  // check if state is controlled by external or not
  // if controlled, return true
  const isControlled = computed(() => {
    void props[prop]
    return !!(Object.hasOwnProperty.call(instance.vnode.props, prop) && Object.hasOwnProperty.call(instance.vnode.props, `onUpdate:${prop}`))
  })

  const model = computed({
    get() {
      const externalValue = props[prop]
      return isControlled.value ? externalValue : internal.value
    },
    set(internalValue) {
      const newValue = fromOut(internalValue)
      const value = toRaw(isControlled.value ? props[prop] : internal.value)
      if (value === newValue || fromIn(value) === internalValue) {
        return
      }
      internal.value = newValue 
      instance?.emit(`update:${prop}`, newValue)
    }
  })

  Object.defineProperty(model, 'externalValue', {
    get: () => isControlled.value ? props[prop] : internal.value
  })

  return {
    model
  }
}
