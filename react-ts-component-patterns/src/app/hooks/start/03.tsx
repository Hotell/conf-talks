import React, { useState } from 'react'

// ============================================================================
// 1. Counter Un/Controllable


// ============================================================================
export const Example = () => {
  const [rootState, setRootState] = useState(0)

  const handleChange = (newCount: number) => {
    setRootState(newCount)
  }

  // 3. render uncontrolled counter
  // 4. render controlled counter
  // 5. render uncontrolled counter with emitter
  return (
    <>
      <h3>Root count: {rootState}</h3>
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