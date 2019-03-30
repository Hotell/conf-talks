import React, { useState, useEffect, ReactNode, ReactChild, FC } from 'react'
import { Button } from './02-stateless-stateful'
// ============================================================================

type State = typeof initialState
type Props = {
  // Why children() cannot return ReactChild?
  // TL;DR: Compiler constraint. You need to return JSx.Element or null
  // @see https://github.com/DefinitelyTyped/DefinitelyTyped/issues/18912#issuecomment-446238418
  children: (
    props: State & { inc: () => void; dec: () => void }
  ) => JSX.Element
} & Partial<State> &
  typeof defaultProps

const initialState = { count: 0 }
const defaultProps = {
  onChange: (value: number) => {}
}

export const Counter = (props: Props) => {
  const [state, setState] = useState(initialState)

  const getState = () => {
    return {
      count: props.count != null ? props.count : state.count
    }
  }

  const handleChange = (type: 'inc' | 'dec') => () => {
    if (props.count != null) {
      props.onChange(getState().count + typeMap[type])
    } else {
      setState((state) => ({ count: state.count + typeMap[type] }))
    }
  }

  const handleInc = handleChange('inc')
  const handleDec = handleChange('dec')

  useEffect(() => {
    props.onChange(getState().count)
  }, [state.count])

  return props.children({
    ...getState(),
    dec: handleDec,
    inc: handleInc
  })
}

Counter.defaultProps = defaultProps

// ============================================================================

const CounterWithButtons = () => (
  <Counter>
    {({ count, dec, inc }) => (
      <div className={classes.counter}>
        <h5 className="alert alert-warning">{count}</h5>
        <Button onClick={inc}>👍</Button>
        <Button onClick={dec}>👎</Button>
      </div>
    )}
  </Counter>
)

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
        <Counter>
          {({ count, dec, inc }) => (
            <div className={classes.counter}>
              <Button onClick={inc}>👍</Button>
              <Button onClick={dec}>👎</Button>
              <h5 className="alert alert-secondary">{count}</h5>
            </div>
          )}
        </Counter>

        <h5>Uncontrolled + Encapsulated</h5>
        <CounterWithButtons />
      </section>

      <section>
        <h5>Controlled</h5>
        <Counter count={state.count} onChange={handleChange}>
          {({ count, dec, inc }) => (
            <div
              className={classes.counter}
              style={{ flexDirection: 'column', alignItems: 'center' }}
            >
              <Button onClick={inc}>👍</Button>
              <h5>{count}</h5>
              <Button onClick={dec}>👎</Button>
            </div>
          )}
        </Counter>
      </section>
    </>
  )
}

Example.title = 'Render Props'

// ============================================================================
// helpers
const typeMap = { inc: 1, dec: -1 }
const classes = {
  counter: 'border row padding-small'
}
