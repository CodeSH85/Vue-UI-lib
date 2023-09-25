import { onMounted, computed, ref } from 'vue'

const useComputedStyle = (element: HTMLElement, property?: string): string => {
  const computedStyle = ref('')

  onMounted(() => {
    if (!element) throw new Error('Must be HTML Element')
    computedStyle.value = window.getComputedStyle(element)[property]
  })

  return computed(() => computedStyle.value).value
}

export default useComputedStyle
