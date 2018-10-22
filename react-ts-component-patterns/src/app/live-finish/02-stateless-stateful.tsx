import React, { Component } from 'react'
// ============================================================================
type ButtonProps = {
  onClick: (ev: React.MouseEvent) => void
  children: React.ReactChild
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger'
}
export const Button = ({ children, onClick, color }: ButtonProps) => (
  <button className={color ? `btn-${color}` : ''} onClick={onClick}>{children}</button>
)
// ============================================================================

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
        <Button color="success" onClick={this.handleInc}>👍</Button>
        <h3>{count}</h3>
        <Button color="danger" onClick={this.handleDec}>👎</Button>
      </div>
    )
  }
}

// ============================================================================
export class Example extends Component {
  static title = 'Stateful/Stateless'
  render() {
    return (
      <>
        <Counter />
      </>
    )
  }
}
