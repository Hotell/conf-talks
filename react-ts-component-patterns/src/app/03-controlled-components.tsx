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
type Props = {
  count?: number
} & typeof defaultProps

type State = typeof initialState

const initialState = { count: 0 }
const defaultProps = {
  onChange: (count: number) => {}
}

class Counter extends Component<Props, State> {
  static readonly defaultProps = defaultProps
  readonly state = initialState

  getState(state = this.state) {
    return {
      count: this.props.count ? this.props.count : state.count
    }
  }

  changeCount = (type: 'inc' | 'dec') => {
    const typeMap = { inc: 1, dec: -1 }
    return () => {
      const { count, onChange } = this.props

      if (count) {
        onChange(this.getState().count + typeMap[type])
      } else {
        this.setState(
          (state) => ({ count: state.count + typeMap[type] }),
          () => onChange(this.getState().count)
        )
      }
    }
  }

  render() {
    return (
      <div className="border padding">
        <button onClick={this.changeCount('inc')}>inc</button>
        <code>{this.getState().count}</code>
        <button onClick={this.changeCount('dec')}>dec</button>
      </div>
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
