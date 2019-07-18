import React, { useState, ReactElement, ReactChild } from 'react'
import { Button } from './button';
// ============================================================================

// 1. define children
// 2. use children within render
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

const initialState = 0

export const Counter = (props:Props) => {
  const [state,setState] = useState(initialState)

  const getState = () => props.count!=null ? props.count : state

  const handleInc = () => {
    if (props.onChange) {
      props.onChange(getState() + 1)
      return
    }

    setState((prev) => prev + 1)
  }

  const handleDec = () => {
    if (props.onChange) {
      props.onChange(getState() - 1)
      return
    }
    setState((prev) => prev - 1)
  }

  return props.children({
    count: getState(),
    inc: handleInc,
    dec: handleDec
  })
}

// ============================================================================

// 3. extract Counter to component with view

export const Example = () => {
  const [rootState, setRootState] = useState(initialState)

  const handleChange = (newCount: number) => {
    setRootState(newCount)
  }

  // 4. render uncontrolled counter via render props
  // 5. render wrapped uncontrolled counter to CounterWithButtons
  // 6. render controlled counter via render props
  return (
    <>
      <h3>Root count: {rootState}</h3>
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