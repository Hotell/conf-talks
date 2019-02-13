import React, { Component, useState } from 'react'

// ============================================================================
// 1. Stateless

type ButtonProps = {
  onClick: (ev: React.MouseEvent) => void
  children: React.ReactChild
  color?: ColorVariants
}

export const Button = ({ children, onClick, color }: ButtonProps) => (
  <button className={color ? `btn-${color}` : ''} onClick={onClick}>
    {children}
  </button>
)

// ============================================================================
// 2. Stateful

type State = typeof initialState
type Props = {}

const initialState = { count: 0 }

class Counter extends Component<Props, State> {
  state = initialState
  handleInc = () => {
    this.setState((state) => ({ count: state.count + 1 }))
  }
  handleDec = () => {
    this.setState((state) => ({ count: state.count - 1 }))
  }

  render() {
    const { count } = this.state

    return (
      <div className="border row">
        <Button color="success" onClick={this.handleInc}>
          👍
        </Button>
        <h3>{count}</h3>
        <Button color="danger" onClick={this.handleDec}>
          👎
        </Button>
      </div>
    )
  }
}

// ============================================================================
// 3. Stateful with hooks
const CounterHooks = (props: Props) => {
  const [count, setCount] = useState(0)

  const handleInc = () => {
    setCount(count + 1)
  }
  const handleDec = () => {
    setCount(count - 1)
  }

  return (
    <div className="border row">
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

export class Example extends Component {
  static title = 'Stateful/Stateless'
  render() {
    return (
      <>
        <Button onClick={() => console.log('click')}>Click me</Button>
        <Counter />
        <section>
          <h5>hooks</h5>
          <CounterHooks />
        </section>
      </>
    )
  }
}

// ============================================================================
// helpers

// Button color props
type ColorVariants = 'primary' | 'secondary' | 'success' | 'warning' | 'danger'

