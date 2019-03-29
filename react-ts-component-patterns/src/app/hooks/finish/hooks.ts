import { useState, useEffect } from 'react'

export const useStateWithCb = <T extends { [k: string]: unknown }>(
  initialState: T,
  cb: () => void,
  prop: keyof T
) => {
  const [state, setState] = useState(initialState)
  const deps = prop ? state[prop] : null

  useEffect(() => {
      cb()
  }, [deps])

  return [state, setState] as [T, typeof setState]
}
