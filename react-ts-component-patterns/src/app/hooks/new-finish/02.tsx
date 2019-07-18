import React, { ReactChild, useState } from 'react'
// ============================================================================
// 1. Button -> button.tsx
// Stateless
import { Button } from './button'

// ============================================================================
// 2. Counter
// Stateful

const initialState = 0

const Counter = () => {
  const [state,setState] = useState(initialState)

  const handleInc = () => {
    setState(prev=>prev+1)
  }
  const handleDec = () => {
    setState(prev=>prev-1)
  }

  return (
    <div className={classes.counter}>
        <Button onClick={handleInc}>👍</Button>
        <h3>{state}</h3>
        <Button onClick={handleDec}>👎</Button>
    </div>
  )
}


// ============================================================================
export const Example = () => {
  return (
    <>
      <Button color="primary" onClick={()=>console.log('clicked')}>Click Me</Button>
      <Counter/>
    </>
  )
}
Example.title = 'Stateful/Stateless'

// ============================================================================
// helpers

const classes = {
  counter: 'border row padding-small'
}