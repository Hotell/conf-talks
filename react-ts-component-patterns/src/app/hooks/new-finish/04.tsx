import React, { useState, ReactElement, ReactChild } from 'react'
import { Button } from './button';
import { useCounter } from './03';
// ============================================================================

// 1. define props extended by children
type Props =  Partial<{
  count: number
  onChange: (count:number) => void
}> & {
  children: (props:{
    count: number
    inc:() => void
    dec:() => void
  }) => ReactElement
}

// 2. use hook with children as a function pattern
export const Counter = ({children,...props}: Props) => {
  return children(useCounter(props))
}

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
      Uncontrolled
      <Counter>
        {(api) => {
          return (
            <div className={classes.counter}>
              <Button color="success" onClick={api.inc}>👍</Button>
              <Button color="danger" onClick={api.dec}>👎</Button>
              <h3>{api.count}</h3>
            </div>
          )
        }}
      </Counter>
      Controlled
      <Counter count={rootState} onChange={handleChange}>
        {(api) => {
          return (
            <div className={classes.counter}>
              <Button color="success" onClick={api.inc}>👍</Button>
              <Button color="danger" onClick={api.dec}>👎</Button>
              <h3>{api.count}</h3>
            </div>
          )
        }}
      </Counter>
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