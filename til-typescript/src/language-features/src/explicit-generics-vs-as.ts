import React from 'react'

type User = {
  name: string
  email: string
  age: number
}
export const main = () => {
  const inputRef = createRef<HTMLInputElement>()
  // const inputRef = createRef<HTMLInputElement | null>(null)
  // const inputRef = createRef(null as HTMLInputElement | null)

  if (inputRef.current) {
    console.log(inputRef.current.value)
  }

  const objRef = createRef<User | null>(null)
  // const objRef = createRef(null as User | null)

  if (objRef.current) {
    console.log(objRef.current.email)
  }
}

const createRef = <T>(initialValue?: T) => {
  return {
    current: initialValue
  }
}
