import React, { Component } from 'react'

// 1. children as a function
// =====================
type Props = {
  count?: number
  children: (
    api: State & { changeCount: Counter['changeCount'] }
  ) => import('react').ReactChild
} & typeof defaultProps

type State = typeof initialState

const initialState = { count: 0 }
const defaultProps = {
  onChange: (count: number) => {}
}

export class Counter extends Component<Props, State> {
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

  changeCount = (type: 'inc' | 'dec') => {
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

  render() {
    return this.props.children({
      ...this.getState(),
      changeCount: this.changeCount
    })
  }
}
// ============================================================================

const exampleInitialState = {
  amount: 0
}
type ExampleState = typeof exampleInitialState
type ExampleProps = {}

const initStateByTwo = {
  count: 0
}
class IncCountByTwo extends Component<{}, typeof initStateByTwo> {
  state = initStateByTwo
  handleChange = () => {
    this.setState((state) => ({ count: state.count + 2 }))
  }
  render() {
    return (
      <>
        <code>{this.state.count}</code>
        <Counter onChange={this.handleChange}>
          {({ changeCount }) => (
            <>
              <button onClick={changeCount('inc')}>increment by two</button>
            </>
          )}
        </Counter>
      </>
    )
  }
}

export class Example extends Component<ExampleProps, ExampleState> {
  state = exampleInitialState

  handleCountChange = (count: number) => {
    this.setState((prevState) => ({ amount: count }))
  }

  render() {
    const { amount } = this.state
    return (
      <div className="row flex-spaces flex-middle">
        <IncCountByTwo />
        <div>Root count: {amount}</div>
        <Counter>
          {({ count, changeCount }) => (
            <>
              <button onClick={changeCount('inc')}>inc</button>
              <code>{count}</code>
              <button onClick={changeCount('dec')}>dec</button>
            </>
          )}
        </Counter>

        <Counter count={amount} onChange={this.handleCountChange}>
          {({ count, changeCount }) => (
            <>
              <button onClick={changeCount('inc')}>inc</button>
              <code>{count}</code>
              <button onClick={changeCount('dec')}>dec</button>
            </>
          )}
        </Counter>

        <Counter onChange={this.handleCountChange}>
          {({ count, changeCount }) => (
            <>
              <button onClick={changeCount('inc')}>inc</button>
              <code>{count}</code>
              <button onClick={changeCount('dec')}>dec</button>
            </>
          )}
        </Counter>

        {/* <Counter count={amount} onChange={this.handleCountChange} /> */}
        {/* <Counter onChange={this.handleCountChange} /> */}
      </div>
    )
  }
}
