import React, { useState, useEffect } from 'react'

import { Button } from './02-stateless-stateful'
// ============================================================================

type Props = Partial<{
  count: number
  onChange: (value: number) => void
}>

const initialState = 0

const Counter = (props: Props) => {
  const [state, setState] = useState(initialState)

  const getState = () => {
    return props.count != null ? props.count : state
  }

  const handleChange = (type: 'inc' | 'dec') => () => {
    const newState = getState() + typeMap[type]

    if (props.count != null && props.onChange) {
      props.onChange(newState)
    } else {
      setState(newState)
    }
  }

  const handleInc = handleChange('inc')
  const handleDec = handleChange('dec')

  useEffect(() => {
    if (props.onChange) {
      props.onChange(getState())
      console.log('effect run')
    }
  }, [state])

  return (
    <div className={classes.counter}>
      <Button onClick={handleInc}>👍</Button>
      <h3>{getState()}</h3>
      <Button onClick={handleDec}>👎</Button>
    </div>
  )
}

// ============================================================================
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
    </>
  )
}
Example.title = 'Un/Controlled'

// ============================================================================
// helpers
const typeMap = { inc: 1, dec: -1 }

const classes = {
  counter: 'border row padding-small'
}
