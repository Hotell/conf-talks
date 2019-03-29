import React, { useState } from 'react'
// ============================================================================

// 1. define children
// 2. use children within render
type State = typeof initialState

const initialState = { count: 0 }

// ============================================================================

// 3. extract Counter to component with view

export const Example = () => {
  const [state, setState] = useState(initialState)

  const handleChange = (newCount: number) => {
    setState((state) => ({ count: newCount }))
  }

  // 4. render uncontrolled counter via render props
  // 5. render wrapped uncontrolled counter to CounterWithButtons
  // 6. render controlled counter via render props
  return (
    <>
      <h3>Root count: {state.count}</h3>
      @TODO
    </>
  )
}

Example.title = 'Render Props'

// ============================================================================
// helpers
const typeMap = { inc: 1, dec: -1 }

// children: (
//  props:
//    & State
//    & {
//        inc: ()=>{}
//        dec: ()=>{}
//      }
// ) => JSX.Element
