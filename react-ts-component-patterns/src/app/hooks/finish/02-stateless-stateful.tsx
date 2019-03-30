import React, { useState } from 'react'

// ============================================================================
// 1. Stateless

type ButtonProps = {
  onClick: (ev: React.MouseEvent) => void
  children: JSX.Element | React.ReactChild
  color?: ColorVariants
}

export const Button: React.FC<ButtonProps> = ({ children, onClick, color }) => {
  const className = color && `btn-${color}`

  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  )
}

// ============================================================================
// 2. Stateful with hooks

type Props = {}

const Counter = (props: Props) => {
  const [count, setCount] = useState(0)

  const handleInc = () => {
    setCount(count + 1)
  }
  const handleDec = () => {
    setCount(count - 1)
  }

  return (
    <div className={classes.counter}>
      <Button color="success" onClick={handleInc}>
        👍
      </Button>
      <h3>{count}</h3>
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
