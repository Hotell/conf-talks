import React, { useState, useEffect } from 'react'
import { Button } from './button'

// ============================================================================
// 1. write custom hook shell without logic


// 2. copy Counter


// 3. extract Counter logic to hook


// 4. create Counter which uses our hook


// ============================================================================
export const Example = () => {
  const [rootState, setRootState] = useState(0)

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
