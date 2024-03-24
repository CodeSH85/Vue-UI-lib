
export function isObject(obj: any): obj is object {
  return obj !== null && typeof obj === 'object' && !Array.isArray(obj)
}

export function buildEmpty() {
  return 0
}

export function pickAttrs(keys: string[], attrs: object): object[] {
  const targetAttrs = {}
  const restAttrs = {}
  keys.forEach(key => {
    if (Object.hasOwnProperty.call(attrs, key) && attrs[key] !== undefined) {
      targetAttrs[key] = attrs[key]
    } else if (attrs[key] !== undefined) {
      restAttrs[key] = attrs[key]
    }
  })

  return [ targetAttrs, restAttrs ]
}
