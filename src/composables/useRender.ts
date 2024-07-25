import type { VNode } from 'vue'
import { getCurrentInstance } from '../utils/getCurrentInstance'

// Copy from vuetify

export function useRender(render: () => VNode) {
  const vm = getCurrentInstance('useRender') as any
  vm.render = render
}
