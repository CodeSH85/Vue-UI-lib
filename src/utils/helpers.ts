
export function isObject(obj: any): obj is object {
  return obj !== null && typeof obj === 'object' && !Array.isArray(obj)
}

export function buildEmpty() {
  return 0
}

export function pickAttrs(keys: string[], attrs: object): object[] {
  const targetAttrs = {}
  const restAttrs = {}
  for (const attr in attrs) {
    keys.includes(attr) 
      ? targetAttrs[attr] = attrs[attr]
      : restAttrs[attr] = attrs[attr]
  }
  console.log(targetAttrs)
  console.log(restAttrs)
  return [ targetAttrs, restAttrs ]
}
