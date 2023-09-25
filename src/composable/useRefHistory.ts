import { ref } from 'vue'

interface RefHistoryOptions {
  canRedo?: boolean
  deep?: boolean
}

const useRefHistory = (target, options: RefHistoryOptions) => {
  const test = ref(target)
  console.log(test, options)
}
export default useRefHistory
