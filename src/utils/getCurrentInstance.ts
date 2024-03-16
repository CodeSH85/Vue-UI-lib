import { getCurrentInstance as _getCurrentInstance } from 'vue'

// copy from vuetify

export function getCurrentInstance(name: string, message?: string) {
  const vm = _getCurrentInstance()
  if (!vm) {
    throw new Error(`${name} ${message || 'must be called from inside a setup function'}`)
  }
  return vm
}

let _uid = 0
let _map = new WeakMap()

export function getUid() {
  const vm = getCurrentInstance('getUid')

  if (_map.has(vm)) { 
    return _map.get(vm)
  } else {
    const uid = _uid++
    _map.set(vm, uid)
    return uid
  }
}

getUid.reset = () => {
  _uid = 0
  _map = new WeakMap()
}
