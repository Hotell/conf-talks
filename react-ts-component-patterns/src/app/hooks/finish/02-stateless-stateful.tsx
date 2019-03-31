import React, { useState } from 'react'

// ============================================================================
// 1. Stateless

type ButtonProps = {
  onClick: (ev: React.MouseEvent) => void
  children: JSX.Element | React.ReactChild
  color?: ColorVariants
}

export const Button = ({ children, onClick, color }: ButtonProps) => {
  const className = color && `btn-${color}`

  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  )
}

// ============================================================================
// 2. Stateful with hooks
const initialState = { count: 0 }

const Counter = () => {
  const [state, setState] = useState(initialState)

  const handleInc = () => {
    setState(prevState => ({count:prevState.count + 1}))
  }
  const handleDec = () => {
    setState(prevState => ({count:prevState.count - 1}))
  }

  return (
    <div className={classes.counter}>
      <Button color="success" onClick={handleInc}>
        👍
      </Button>
      <h3>{state.count}</h3>
      <Button color="danger" onClick={handleDec}>
        👎
      </Button>
    </div>
  )
}

// ============================================================================

export const Example = () => {
    return (
      <>
        <Button onClick={() => console.log('click')}>Click me</Button>
        <Counter />
      </>
    )

}
Example.title = 'Stateful/Stateless'

// ============================================================================
// helpers

// Button color props
type ColorVariants = 'primary' | 'secondary' | 'success' | 'warning' | 'danger'

const classes = {
  counter: 'border row padding-small'
}
