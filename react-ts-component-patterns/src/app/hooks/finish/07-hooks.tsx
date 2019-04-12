import React, { useState, useEffect } from 'react'
import { Button } from './02-stateless-stateful'

type Props = Partial<{
  count: number
  onChange: (value: number) => void
}>

const initialState = 0

const useCounter = (props: Props) => {
  const [state, setState] = useState(initialState)
  useEffect(() => {
    if (!props) {
      return
    }

    if (props.onChange) {
      props.onChange(getState())
      console.log('effect run')
    }
  }, [state])

  const getState = () => {
    return props.count != null ? props.count : state
  }

  const createChangeHandler = (type: 'inc' | 'dec') => () => {
    const newState = getState() + typeMap[type]

    if (props.count != null && props.onChange) {
      props.onChange(newState)
    } else {
      setState(newState)
    }
  }

  const handleInc = createChangeHandler('inc')
  const handleDec = createChangeHandler('dec')

  return {
    count: getState(),
    inc: handleInc,
    dec: handleDec
  }
}

const Counter = (props: Props) => {
  const { count, dec, inc } = useCounter(props)

  return (
    <div className={classes.counter}>
      <Button onClick={inc}>👍</Button>
      <h3>{count}</h3>
      <Button onClick={dec}>👎</Button>
    </div>
  )
}

// Render Prop pattern via hooks
type CounterRenderProps = Props & {
  children: (props: {
    count: number
    inc: () => void
    dec: () => void
  }) => JSX.Element
}
const CounterRender = ({ children, ...props }: CounterRenderProps) =>
  children(useCounter(props))

// =============================================================================
export const Example = () => {
  const [state, setState] = useState(initialState)

  const handleChange = (newCount: number) => {
    setState(newCount)
  }

  return (
    <>
      <h3>Root count: {state}</h3>

      <section>
        <h5>Uncontrolled</h5>
        <Counter />
      </section>
      <section>
        <h5>Controlled</h5>
        <Counter count={state} onChange={handleChange} />
      </section>
      <section>
        <h5>
          Uncontrolled emitter <small>updates parent state only</small>
        </h5>
        <Counter onChange={handleChange} />
      </section>

      <hr />

      <section>
        <h4>RenderProps via hooks</h4>
        <div>
          <h5>Uncontrolled</h5>
          <CounterRender>
            {({ count, dec, inc }) => (
              <div className={classes.counter}>
                <Button onClick={inc}>👍</Button>
                <Button onClick={dec}>👎</Button>
                <h5 className="alert alert-secondary">{count}</h5>
              </div>
            )}
          </CounterRender>
        </div>
        <div>
          <h5>Controlled</h5>
          <CounterRender count={state} onChange={handleChange}>
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
          </CounterRender>
        </div>
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
