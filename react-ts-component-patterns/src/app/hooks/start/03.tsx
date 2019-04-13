import React, { useState } from 'react'

// ============================================================================
// 1. Counter Un/Controllable
type Props = {}

const initialState = 0


// ============================================================================
export const Example = () => {
  const [state, setState] = useState(initialState)

  const handleChange = (newCount: number) => {
    setState(newCount)
  }

  // 3. render uncontrolled counter
  // 4. render controlled counter
  // 5. render uncontrolled counter with emitter
  return (
    <>
      <h3>Root count: {state}</h3>
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