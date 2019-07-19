import React, { useState, useEffect } from 'react'
import { Button } from './button';

// ============================================================================
// 1. Counter Un/Controllable
type Props =  Partial<{
  count: number
  onChange: (count:number) => void
}>

const initialState = 0

const Counter = (props:Props) => {
  const [state,setState] = useState(initialState)

  const getState = () => props.count!=null ? props.count : state

  const handleInc = () => {
    if (props.onChange) {
      props.onChange(getState() + 1)
      return
    }

    setState((prev) => prev + 1)
  }

  const handleDec = () => {
    if (props.onChange) {
      props.onChange(getState() - 1)
      return
    }
    setState((prev) => prev - 1)
  }

  return (
    <div className={classes.counter}>
        <Button onClick={handleInc}>👍</Button>
        <h3>{getState()}</h3>
        <Button onClick={handleDec}>👎</Button>
    </div>
  )
}


// ============================================================================
export const Example = () => {
  const [rootState, setRootState] = useState(initialState)

  const handleChange = (newCount: number) => {
    setRootState(newCount)
  }

  // 2. render uncontrolled counter
  // 3. render controlled counter
  return (
    <>
      <h3>Root count: {rootState}</h3>
      Uncontrolled
      <Counter />
      Controlled
      <Counter count={rootState} onChange={handleChange} />
    </>
  )
}
Example.title = 'Un/Controlled'

// ============================================================================
// helpers
const typeMap = { inc: 1, dec: -1 }

const classes = {
  counter: 'border row padding-small'
}