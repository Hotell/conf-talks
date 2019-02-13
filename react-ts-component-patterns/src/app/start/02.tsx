import React, { Component } from 'react'
// ============================================================================
// 1. Button
// Stateless
type ButtonProps = {}


// ============================================================================
// 2. Counter
// Stateful
// a) class
// b) hooks

type Props = {}

// ============================================================================
export class Example extends Component {
  static title = 'Stateful/Stateless'
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

// Button color props
type ColorVariants = 'primary' | 'secondary' | 'success' | 'warning' | 'danger'
