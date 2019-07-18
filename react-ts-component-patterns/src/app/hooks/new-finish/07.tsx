// Hooks
import React, { useState } from 'react'
import { Button } from './button';

// 1. hook

const useCounter = (props: Props) => {
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

  return {
    count: getState(),
    inc: handleInc,
    dec: handleDec
  }
}


// =============================================================================

// 2. counter
type Props =  Partial<{
  count: number
  onChange: (count:number) => void
}>

const initialState = 0

const Counter = (props:Props) => {
  const {count,dec,inc} = useCounter(props)

  return (
    <div className={classes.counter}>
        <Button onClick={inc}>👍</Button>
        <h3>{count}</h3>
        <Button onClick={dec}>👎</Button>
    </div>
  )
}


// =============================================================================

// 3. Render props with hooks

type RenderProps = {
  children: (props: {
    count: number
    inc: () => void
    dec: () => void
  }) => JSX.Element
} & Props

const RenderCounter = ({children,...props}: RenderProps) => children(useCounter(props))
// =============================================================================

export const Example = () => {
  const [rootState, setRootState] = useState(initialState)

  const handleChange = (newCount: number) => {
    setRootState(newCount)
  }

  return (
    <>
      <h3>Root count: {rootState}</h3>

      <section>
        <h5>Uncontrolled</h5>
        <RenderCounter count={rootState} onChange={handleChange}>
          {(api) => {
            return (
              <div className={classes.counter}>
                <h3>{api.count}</h3>
                <Button color="success" onClick={api.inc}>👍</Button>
                <Button color="danger" onClick={api.dec}>👎</Button>
              </div>
            )
          }}
        </RenderCounter>
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
