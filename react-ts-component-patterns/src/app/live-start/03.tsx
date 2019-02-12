import React, { Component } from 'react'

// ============================================================================
// 1. Counter Un/Controllable
type State = typeof initialState
type Props = {}

const initialState = { count: 0 }


// ============================================================================
export class Example extends Component<{},typeof initialState> {
  static title = 'Un/Controlled'

  state = initialState

  handleChange = (newCount: number) => {
    this.setState(() => ({ count: newCount }))
  }

  render() {
    // 3. render root state
    // 4. render uncontrolled counter
    // 5. render controlled counter
    // 6. render uncontrolled counter with emitter
    return <>@TODO</>
  }
}

// ============================================================================
// helpers
const typeMap = { inc: 1, dec: -1 }
