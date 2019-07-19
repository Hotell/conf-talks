import React, { JSXElementConstructor } from 'react'
import { useCounter } from './03'
import { Counter } from './04'
import { Button } from './button'

// ============================================================================

// 4. injected props + mapped type via conditional types explanation
type InjectedProps = ReturnType<typeof useCounter>

// 5. extended
type ExtendedProps = Partial<{ step: number }>

// 3. withCounter
const withCounter = <P extends InjectedProps>(
  Cmp: JSXElementConstructor<P>
) => {
  // EXPLAIN TYPESCRIPT META-PROGRAMING
  type InnerProps = Omit<P, keyof InjectedProps> & ExtendedProps

  const WithCounter = (props: InnerProps) => {
    const { step, ...passThroughProps } = props

    return (
      <Counter>
        {(injectedProps) => {
          const extendedApi = step
            ? {
              ...injectedProps,
              count: injectedProps.count * step,
              }
            : injectedProps

          return (
            // https://github.com/Microsoft/TypeScript/issues/28636
            <Cmp {...(extendedApi as P)} {...passThroughProps} />
          )
        }}
      </Counter>
    )
  }

  return WithCounter
}

// 1. Counter
//  a. introduce InjectedProps ☝️
//  b. { colorType?: ColorTypes } -> passThrough in withCounter
type CounterProps = {
  count: number
  inc: () => void
  dec: () => void
}

const CounterStep = (props: CounterProps) => {
  const { count, inc, dec } = props

  return (
    <div className={classes.counter}>
      <h3>{count}</h3>
      <Button color="success" onClick={inc}>
        👍
      </Button>
      <Button color="danger" onClick={dec}>
        👎
      </Button>
    </div>
  )
}

// 2. ExtendedComponent
const CounterStepper = withCounter(CounterStep)

// ============================================================================
export const Example = () => {
  return (
    <>
      {/*
        3. types of CounterStepper
        */}
      injected API
      <CounterStepper />
      injected + extended API
      <CounterStepper step={10} />
    </>
  )
}
Example.title = 'HoC'

// ============================================================================
// Helpers
const classes = {
  counter: 'border row padding-small',
  alertDanger: 'alert alert-danger'
}
