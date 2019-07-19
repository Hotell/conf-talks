import React, { useState, useEffect } from 'react'
import { Button } from './button'

// ============================================================================
// 1. encapsulate logic via custom hook


// ============================================================================
export const Example = () => {
  const [rootState, setRootState] = useState(0)

  const handleChange = (newCount: number) => {
    setRootState(newCount)
  }

  // 2. demonstrate it works as before
  return (
    <>
      <h3>Root count: {rootState}</h3>

    </>
  )
}
Example.title = 'Hooks'

// ============================================================================
// helpers
const classes = {
  counter: 'border row padding-small'
}
