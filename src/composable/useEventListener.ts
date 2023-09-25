import { onMounted, onUnmounted } from 'vue'

type HandlerType = (event: Event) => void

const useEventListener = (event: string, handler: HandlerType) => {
  onMounted(() => {
    document.addEventListener(event, handler)
  })
  onUnmounted(() => {
    document.removeEventListener(event, handler)
  })
}

export default useEventListener
