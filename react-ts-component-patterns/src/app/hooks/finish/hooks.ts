import { useState, useEffect } from 'react'

export const useSetState = <T extends { [k: string]: unknown }>(
  initialState: T,
  cb?: () => void,
  prop?: keyof T
) => {
  const [state, setState] = useState(initialState)

  type MergeStateArgs = Partial<T> | ((prevState: T) => Partial<T>)

  const setMergedState = (stateChunk: MergeStateArgs) => {
      if(isFunction(stateChunk)){
        return setState(prevState=>({
          ...prevState,
          ...stateChunk(prevState)
        }))
      }

      return setState({...state,...stateChunk})
  }

  const deps = prop ? state[prop] : null

  useEffect(() => {
      if(cb){cb()}
  }, [deps])

  return [state, setMergedState] as [typeof state, typeof setMergedState]
}


function isFunction(value:any): value is Function{
  return typeof value === 'function'
}
