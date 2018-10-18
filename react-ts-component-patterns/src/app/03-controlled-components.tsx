import React, { Component } from 'react'

// 1. initializing state via props
// =====================
// type Props = typeof defaultProps
// type State = ReturnType<typeof getInitialState>

// const getInitialState = ({ count }: Props) =>
//   Object.freeze({
//     count
//   })

// const defaultProps = {
//   count: 0
// }

// class Counter extends Component<Props, State> {
//   static readonly defaultProps = defaultProps
//   readonly state = getInitialState(this.props)
//   handleInc = () => {
//     this.setState((prevState) => ({ count: prevState.count + 1 }))
//   }
//   handleDec = () => {
//     this.setState((prevState) => ({ count: prevState.count - 1 }))
//   }

//   render() {
//     const { count } = this.state

//     return (
//       <>
//         <button onClick={this.handleInc}>inc</button>
//         <code>{count}</code>
//         <button onClick={this.handleDec}>dec</button>
//       </>
//     )
//   }
// }

// 2. Controlled component
// =====================
type Props = Partial<{
  count: number
}> &
  typeof defaultProps

type State = typeof initialState

const initialState = { count: 0 }
const defaultProps = {
  onChange: (count: number) => {}
}

class Counter extends Component<Props, State> {
  static readonly defaultProps = defaultProps
  readonly state = initialState

  isControlled(prop: keyof State) {
    return this.props[prop] !== undefined
  }

  getState(state = this.state): State {
    return {
      count: this.isControlled('count') ? this.props.count! : state.count
    }
  }

  changeCount(type: 'inc' | 'dec') {
    return () => {
      const value = type === 'inc' ? +1 : -1
      this.isControlled('count')
        ? this.props.onChange(this.getState().count + value)
        : this.setState(
            (prevState) => ({ count: prevState.count + value }),
            () => this.props.onChange(this.getState().count)
          )
    }
  }

  handleInc = () => {
    this.isControlled('count')
      ? this.props.onChange(this.getState().count + 1)
      : this.setState(
          (prevState) => ({ count: prevState.count + 1 }),
          () => this.props.onChange(this.getState().count)
        )
  }

  handleDec = () => {
    this.isControlled('count')
      ? this.props.onChange(this.getState().count - 1)
      : this.setState(
          (prevState) => ({ count: prevState.count - 1 }),
          () => this.props.onChange(this.getState().count)
        )
  }

  render() {
    return (
      <>
        <button onClick={this.changeCount('inc')}>inc</button>
        <code>{this.getState().count}</code>
        <button onClick={this.changeCount('dec')}>dec</button>
      </>
    )
  }
}
// ============================================================================

const exampleInitialState = {
  amount: 0
}
type ExampleState = typeof exampleInitialState
type ExampleProps = {}

export class Example extends Component<ExampleProps, ExampleState> {
  static title = 'Controlled'
  state = exampleInitialState

  handleCountChange = (count: number) => {
    this.setState((prevState) => ({ amount: count }))
  }

  render() {
    const { amount } = this.state
    return (
      <div className="row flex-spaces flex-middle">
        <div>Root count: {amount}</div>
        <Counter />

        <Counter count={amount} onChange={this.handleCountChange} />
        <Counter onChange={this.handleCountChange} />
      </div>
    )
  }
}
