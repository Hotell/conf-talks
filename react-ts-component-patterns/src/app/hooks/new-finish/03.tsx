import React, { useState, useEffect } from 'react'
import { Button } from './button'

// ============================================================================
// 1. encapsulate logic to custom hook

type Props = Partial<{
  count: number
  onChange: (count: number) => void
}>


export const useCounter = (props: Props) => {
  const [state, setState] = useState(0)

  const getState = () => (props.count != null ? props.count : state)

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

  return {
    count: getState(),
    inc: handleInc,
    dec: handleDec
  }
}

const Counter = (props: Props) => {
  const { count, inc, dec } = useCounter(props)

  return (
    <div className={classes.counter}>
      <Button onClick={inc}>👍</Button>
      <h3>{count}</h3>
      <Button onClick={dec}>👎</Button>
    </div>
  )
}

// ============================================================================
export const Example = () => {
  const [rootState, setRootState] = useState(0)

  // 2. demonstrate it works as before
  return (
    <>
      <h3>Root count: {rootState}</h3>
      Uncontrolled
      <Counter />
      Controlled
      <Counter count={rootState} onChange={setRootState} />
    </>
  )
}
Example.title = 'Hooks'

// ============================================================================
// helpers

const classes = {
  counter: 'border row padding-small'
}
