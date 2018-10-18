import React, { SFC, Component } from 'react'

// 1. Initial Button
// =================
// type Props = {
//   onClick: (ev: import('react').MouseEvent<HTMLElement>) => void
//   color: string
//   children: import('react').ReactChild
// }

// class Button extends Component<Props> {
//   render() {
//     const { onClick: handleClick, color, children } = this.props

//     return (
//       <button style={{ color }} onClick={handleClick}>
//         {children}
//       </button>
//     )
//   }
// }

// 2. Default Props
// =================
type Props = {
  onClick: (ev: import('react').MouseEvent<HTMLElement>) => void
  children: import('react').ReactChild
} & typeof defaultProps

const defaultProps = { color: 'red' }

class Button extends Component<Props> {
  static readonly defaultProps = defaultProps
  render() {
    const { onClick: handleClick, color, children } = this.props

    return (
      <button style={{ color }} onClick={handleClick}>
        {children}
      </button>
    )
  }
}

// @BUG https://github.com/DefinitelyTyped/DefinitelyTyped/issues/29816
//
// const Button = ({ onClick: handleClick, color, children }: Props) => (
//   <button style={{ color }} onClick={handleClick}>
//     {children}
//   </button>
// )
// Button.defaultProps = defaultProps

// 3. Stateful Component
// =====================

type SProps = {}
type State = typeof initialState

const initialState = {
  count: 0
}
class Counter extends Component<SProps, State> {
  state = initialState
  handleInc = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }))
  }
  handleDec = () => {
    this.setState((prevState) => ({ count: prevState.count - 1 }))
  }

  render() {
    const { count } = this.state

    return (
      <>
        <Button onClick={this.handleInc}>inc</Button>
        <code>{count}</code>
        <Button onClick={this.handleDec}>dec</Button>
      </>
    )
  }
}

// ============================================================================

const handleClick = () => console.log('clicked')
const color = 'red'

export const Example = () => (
  <>
    <Button onClick={handleClick}>Click me</Button>
    <Counter />
  </>
)
Example.title = 'Stateful/Stateless'
