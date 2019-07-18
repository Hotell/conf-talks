// Hooks
import React, { useState } from 'react'
// import { Button } from './button';

// 1. hook


// =============================================================================

// 2. counter



// =============================================================================

// 3. Render props with hooks

// type RenderProps = {
//   children: (props: {
//     count: number
//     inc: () => void
//     dec: () => void
//   }) => JSX.Element
// } & Props
// =============================================================================

export const Example = () => {
  const [rootState, setRootState] = useState(0)

  const handleChange = (newCount: number) => {
    setRootState(newCount)
  }

  return (
    <>
      <h3>Root count: {rootState}</h3>

      <section>
        <h5>Uncontrolled</h5>
        @Todo
      </section>
      <section>
        <h5>Controlled</h5>
        @Todo
      </section>
      <section>
        <h5>Render Prop + hook</h5>
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
