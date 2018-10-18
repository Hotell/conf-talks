import React, { Component } from 'react'
// ============================================================================

// 1. define children
// 2. use children within render


// ============================================================================

// 3. extract Counter to component with view


export class Example extends Component {
  static title = 'Render Props'

  // 4. state + handleChange

  render() {
    return (
      <>
        @TODO
      </>
    )
  }
}

// ============================================================================
// helpers

// children: (
//  props: State & { inc: Counter['handleInc']; dec: Counter['handleDec'] }
// ) => React.ReactChild