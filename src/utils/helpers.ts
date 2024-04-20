import { PropType } from 'vue'

export function isObject(obj: any): obj is object {
  return obj !== null && typeof obj === 'object' && !Array.isArray(obj)
}

export function pickAttrs(keys: string[], attrs: object): object[] {
  const targetAttrs = {}
  const restAttrs = {}
  for (const attr in attrs) {
    keys.includes(attr)
      ? targetAttrs[attr] = attrs[attr]
      : restAttrs[attr] = attrs[attr]
  }
  return [ targetAttrs, restAttrs ]
}

export type EventProp<T extends any[] = any[], F = (...args: T) => void> = F
export const EventProp = <T extends any[] = any[]>() => [Function, Array] as PropType<EventProp<T>>
export function callEvent<T extends any[]>(target: EventProp<T> | undefined, ...args: T) {
  if (Array.isArray(target)) {
    target.forEach(item => {
      item(...args)
    })
  } else if (typeof target === 'function') {
    target(...args)
  }
}
