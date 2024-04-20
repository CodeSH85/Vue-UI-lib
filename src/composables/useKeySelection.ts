import { onKeyStroke } from '@vueuse/core'
import { MaybeElement } from '@vueuse/core'
import { toValue, ref } from 'vue'

const useKeySelection = (target: MaybeElement) => {
  if (!target || !target.value.children) throw new Error('Invalid element')
  const elements = ref<HTMLElement>()
  if (target && target.value.children) {
    elements.value = Array.from(target.value.children)
  }
  const currentDataIdx = -1

  onKeyStroke('ArrowUp', (e) => {
    e.preventDefault()
    currentDataIdx.value <= 0
      ? currentDataIdx.value = props.items.length - 1
      : currentDataIdx.value -= 1
    if (targetEle.value) targetEle.value.scrollIntoView(false)
  })
  onKeyStroke('ArrowDown', (e) => {
    e.preventDefault()
    currentDataIdx.value === props.items.length - 1
      ? currentDataIdx.value = 0
      : currentDataIdx.value += 1
    if (targetEle.value) targetEle.value.scrollIntoView(false)
  })
  onKeyStroke('Enter', () => {
    emit('update:modelValue', props.items[currentDataIdx.value].value)
    if (targetEle.value) targetEle.value.scrollIntoView(false)
    console.log(closeContent.value)
    closeContent.value()
  })
  return 0;
}

export {
  useKeySelection
}