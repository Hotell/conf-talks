import React, { useState } from 'react'

// ============================================================================
// 1. Counter Un/Controllable
type State = typeof initialState
type Props = {}

const initialState = { count: 0 }


// ============================================================================
export const Example = () => {
  const [state, setState] = useState(initialState)

  const handleChange = (newCount: number) => {
    setState((state) => ({ count: newCount }))
  }

  // 3. render uncontrolled counter
  // 4. render controlled counter
  // 5. render uncontrolled counter with emitter
  return (
    <>
      <h3>Root count: {state.count}</h3>
      @TODO
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