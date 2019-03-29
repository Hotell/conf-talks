import React, { Component } from 'react'
// ============================================================================

// 1. define children
// 2. use children within render
type State = typeof initialState

const initialState = { count: 0 }

// ============================================================================

// 3. extract Counter to component with view

export class Example extends Component {
  static title = 'Render Props'

  state = initialState
  handleChange = (newCount: number) => {
    this.setState((state) => ({ count: newCount }))
  }

  render() {

    // 4. render uncontrolled counter via render props
    // 5. render wrapped uncontrolled counter to CounterWithButtons
    // 6. render controlled counter via render props
    return (
      <>
        <h3>Root count: {this.state.count}</h3>
        @TODO
      </>
    )
  }
}

// ============================================================================
// helpers
const typeMap = { inc: 1, dec: -1 }

// children: (
//  props:
//    & State
//    & {
//        inc: Counter['handleInc']
//        dec: Counter['handleDec']
//      }
// ) => React.ReactChild
