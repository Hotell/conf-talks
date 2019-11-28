export const main = () => {}

const bad = () => {
  interface Something<T> {
    name: string
  }

  let x: Something<number> = { name: '' }
  let y: Something<string> = { name: '' }

  // 🤯Expected error ???!!!!
  x = y
}

const good = () => {
  interface Something<T> {
    name: T
  }

  let x: Something<number> = { name: 1 }
  let y: Something<string> = { name: '' }

  // ✅Expected error: Can't convert Something<number> to Something<string>!
  x = y
}
