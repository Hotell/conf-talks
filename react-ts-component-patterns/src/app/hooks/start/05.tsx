import React, { ComponentProps } from 'react'
import { Counter } from './04'
import { Subtract } from '../../types'

// ============================================================================

// 4. injected props + mapped type via conditional types explanation
type InjectedProps = Parameters<ComponentProps<typeof Counter>['children']>[0]

// 5. extended { maxCount?: number }
// type ExtendedProps = { maxCount?: number }

// 3. withCounter

// 1. CounterWannabe
//  a. introduce InjectedProps ☝️
//  b. { colorType?: ColorTypes } -> passThrough in withCounter
type CounterWannabeProps = {
  count: number
  inc: () => void
  dec: () => void
  colorType?: ColorTypes
}

const CounterWannabe = (props: CounterWannabeProps) => {
  const { count, inc, colorType } = props
  const classes = `alert alert-${colorType}`

  return (
    <div style={{ cursor: 'pointer' }} className={classes} onClick={inc}>
      {count}
    </div>
  )
}

// 2. ExtendedComponent
// const ExtendedComponent = withCounter(CounterWannabe)

// ============================================================================
export const Example = () => {
  return (
    <>
      {/*
        3. types of ExtendedComponent
        // - ExtendedComponent
        // - ExtendedComponent with colorTypes
        // - ExtendedComponent with maxCount
        */}
    </>
  )
}
Example.title = 'HoC'

// ============================================================================
// Helpers
type ColorTypes = 'primary' | 'secondary' | 'success'
