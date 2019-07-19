import React, { useState, ReactElement, ReactChild } from 'react'
import { Button } from './button';
import { useCounter } from './03';
// ============================================================================

// 1. define props extended by `children`

// 2. introduce TS meta-programming by getting all needed types from useCounter

// 3. use hook with children as a function pattern

// ============================================================================

export const Example = () => {
  const [rootState, setRootState] = useState(0)

  const handleChange = (newCount: number) => {
    setRootState(newCount)
  }

  return (
    <>
      <h3>Root count: {rootState}</h3>
      {/* 3. use custom View */}

    </>
  )
}

Example.title = 'Render Props'

// ============================================================================
// helpers

// children: (props: {
//              count: number
//              inc: ()=>{}
//              dec: ()=>{}
//            }) => JSX.Element

const classes = {
  counter: 'border row padding-small'
}