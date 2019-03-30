// Hooks
import React, { useState, useEffect } from 'react'
// import { Button } from './02';

type Props = Partial<{
  count: number
  onChange: (value: number) => void
}>

const initialState = { count: 0 }

// 1. hook

// 2. counter

// =============================================================================

export const Example = () => {
  const [state, setState] = useState(initialState)

  const handleChange = (newCount: number) => {
    setState((state) => ({ count: newCount }))
  }

  return (
    <>
      <h3>Root count: {state.count}</h3>

      <section>
        <h5>Uncontrolled</h5>
        @Todo
      </section>
      <section>
        <h5>Controlled</h5>
        @Todo
      </section>
    </>
  )
}
Example.title = 'Hooks'

// ============================================================================
// helpers
const typeMap = { inc: 1, dec: -1 }

const classes = {
  counter: 'border row padding-small'
}
