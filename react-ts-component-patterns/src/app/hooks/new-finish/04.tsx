import React, { useState, ReactElement, ReactChild } from 'react'
import { Button } from './button';
import { useCounter } from './03';
// ============================================================================

// 1. define props extended by children
type Props =  CounterProps & {
  children: (props:ChildrenApi) => ReactElement
}
type ChildrenApi = ReturnType<typeof useCounter>
type CounterProps = Parameters<typeof useCounter>[0]

// 2. use hook with children as a function pattern
export const Counter = ({children,...props}: Props) => {
  return children(useCounter(props))
}

// ============================================================================

export const Example = () => {
  const [rootState, setRootState] = useState(0)

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
      <Counter count={rootState} onChange={setRootState}>
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

// children: (props: {
//              count: number
//              inc: ()=>{}
//              dec: ()=>{}
//            }) => JSX.Element


const classes = {
  counter: 'border row padding-small'
}