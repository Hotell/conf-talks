import React, { useState, useEffect } from 'react'
import { Button } from './button'

// ============================================================================
// 1. Counter Un/Controlled



// ============================================================================
export const Example = () => {
  const [rootState, setRootState] = useState(0)

  // 2. render uncontrolled counter
  // 3. render controlled counter
  return (
    <>
      <h3>Root count: {rootState}</h3>

    </>
  )
}
Example.title = 'Un/Controlled'

// ============================================================================
// helpers
const classes = {
  counter: 'border row padding-small'
}
