import React, { useState, ReactElement, ReactChild } from 'react'
// ============================================================================

// 1. define children
// 2. use children within render

// ============================================================================

// 3. extract Counter to component with view

export const Example = () => {
  const [rootState, setRootState] = useState(0)

  const handleChange = (newCount: number) => {
    setRootState(newCount)
  }

  // 4. render uncontrolled counter via render props
  // 5. render wrapped uncontrolled counter to CounterWithButtons
  // 6. render controlled counter via render props
  return (
    <>
      <h3>Root count: {rootState}</h3>
      @TODO
    </>
  )
}

Example.title = 'Render Props'

// ============================================================================
// helpers
const typeMap = { inc: 1, dec: -1 }

// children: (props: {
//              count: number
//              inc: ()=>{}
//              dec: ()=>{}
//            }) => JSX.Element


const classes = {
  counter: 'border row padding-small'
}