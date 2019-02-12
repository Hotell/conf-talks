import React, { Component, ComponentProps } from 'react'
import { Counter } from '../live-finish/04-render-prop';
// ============================================================================

// 4. injected props + mapped type via conditional types explanation
type InjectedProps = Parameters<ComponentProps<typeof Counter>['children']>[0]

// 5. extended { maxCount?: number }
// type ExtendedProps = { maxCount?: number }


// 3. withCounter


// 1. CounterWannabe
//  a. InjectedProps
//  b. { colorType?: ColorTypes } -> passThrough in withCounter
const CounterWannabe = (props: InjectedProps) => {

    const { count, inc/* , colorType */ } = props
    const classes = `alert alert-${''}`

    return (
      <div
        style={{ cursor: 'pointer' }}
        className={classes}
        onClick={inc}
      >
        {count}
      </div>
    )

}


// 2. ExtendedComponent
// const ExtendedComponent = withCounter(CounterWannabe)

// ============================================================================
export class Example extends Component {
  static title = 'HoC'
  render() {
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
}


// ============================================================================
// Helpers
type ColorTypes = 'primary' | 'secondary' | 'success'