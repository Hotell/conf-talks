import React, { useState, useEffect } from 'react'
import { Button } from './02-stateless-stateful'

type Props = Partial<{
  count: number
  onChange: (value: number) => void
}>

const initialState = { count: 0 }

const useCounter = (props: Props) => {
  const [state, setState] = useState(initialState)
  useEffect(() => {
    if (!props) {
      return
    }

    if (props.onChange) {
      props.onChange(getState().count)
      console.log('effect run')
    }
  }, [state.count])

  const getState = () => {
    return {
      count: props.count != null ? props.count : state.count
    }
  }

  const createChangeHandler = (type: 'inc' | 'dec') => () => {
    if (props.count != null && props.onChange) {
      props.onChange(getState().count + typeMap[type])
    } else {
      setState((prevState) => ({ count: getState().count + typeMap[type] }))
    }
  }

  const handleInc = createChangeHandler('inc')
  const handleDec = createChangeHandler('dec')

  return {
    ...getState(),
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
Example.title = 'Hooks'

// ============================================================================
// helpers
const typeMap = { inc: 1, dec: -1 }

const classes = {
  counter: 'border row padding-small'
}
