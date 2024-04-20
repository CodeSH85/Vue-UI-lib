export const WindowProps = {
  modelValue: {
  }
}

export const WindowItemProps = {
  value: {}
}

function printPattern(n: number) {
  for (let i = 1; i <= n; i++) {
    const base = Math.pow(2, i-1);
    const addResult = new Array(i).fill(base).join('+')
    console.log(`(${i}) ${addResult}=${base * i}`)
  }
}

function getMaxMultiAmt(list) {
  let result = ''
  for (let i = 0; i < list.length; i++) {
    for (let j = 0; j < list.length; j++) {
      
    }
  }
}