import React, { useState, useEffect } from 'react'

import { Button } from './02-stateless-stateful'
// ============================================================================

type State = typeof initialState
type Props = Partial<State> & typeof defaultProps

const initialState = { count: 0 }
const defaultProps = {
  onChange: (value: number) => {}
}

const Counter = (props: Props) => {
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
    console.log('effect run')
  }, [state.count])

  return (
    <div className="border row">
      <Button onClick={handleInc}>👍</Button>
      <h3>{getState().count}</h3>
      <Button onClick={handleDec}>👎</Button>
    </div>
  )
}

Counter.defaultProps = defaultProps

// ============================================================================
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
        <Counter />
      </section>
      <section>
        <h5>Controlled</h5>
        <Counter count={state.count} onChange={handleChange} />
      </section>
      <section>
        <h5>
          Uncontrolled emitter <small>updates parent state only</small>
        </h5>
        <Counter onChange={handleChange} />
      </section>
    </>
  )
}
Example.title = 'Un/Controlled'

// ============================================================================
// helpers
const typeMap = { inc: 1, dec: -1 }
