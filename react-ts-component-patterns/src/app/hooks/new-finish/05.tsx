import React, { JSXElementConstructor } from 'react'
import { useCounter } from './03'
import { Counter } from './04'
import { Button } from './button'

// ============================================================================

// 2. injected props via conditional types explanation
type InjectedProps = ReturnType<typeof useCounter>

// 3. extended
type ExtendedProps = Partial<{ step: number }>

// 4. withCounter
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
                count: injectedProps.count * step
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

// 1. Stepper
// a. {count: number; inc:() => void; dec:() => void} -> inject in withCounter
// b. {color?: ColorTypes} -> passThrough in withCounter
type StepperProps = {
  count: number
  inc: () => void
  dec: () => void
  color?: ColorVariants
}

const Stepper = ({ count, inc, dec, color }: StepperProps) => {
  const min = 0
  const max = 100
  const calculate = Math.floor((max / 100) * count)
  const percentage = count > max ? max : count < min ? min : calculate
  const isOutOfUpperBounds = calculate >= max
  const isOutOfLowerBounds = calculate <= min

  return (
    <div
      className={classes.counter}
      style={{ display: 'flex', alignItems: 'stretch' }}
    >
      <Button color="danger" onClick={() => !isOutOfLowerBounds && dec()}>
        👈
      </Button>
      <div className="progress" style={{ height: 'auto' }}>
        <div className={`bar striped ${color} w-${percentage}`} />
      </div>
      <Button color="success" onClick={() => !isOutOfUpperBounds && inc()}>
        👉
      </Button>
    </div>
  )
}

// 5. Stepper with functionality
const CounterStepper = withCounter(Stepper)

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
      <CounterStepper step={10} color="warning" />
    </>
  )
}
Example.title = 'HoC'

// ============================================================================
// Helpers
const classes = {
  counter: 'border padding-small'
}

type ColorVariants = 'primary' | 'secondary' | 'success' | 'warning' | 'danger'
