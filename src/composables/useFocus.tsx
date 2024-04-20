import { ref } from 'vue'

export function useFocus() {
  const isFocus = ref(false)
  function setFocus() {
    isFocus.value = true
  }
  function s() {
    isFocus.value = true
  }
  return {

  }  
}