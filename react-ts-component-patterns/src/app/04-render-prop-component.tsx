import React, { Component } from 'react'

// 1. children as a function
// =====================
type Props = {
  children: (
    props: State & { onChange: Counter['changeCount'] }
  ) => import('react').ReactChild
  count?: number
} & typeof defaultProps

type State = typeof initialState

const initialState = { count: 0 }
const defaultProps = {
  onChange: (count: number) => {}
}

export class Counter extends Component<Props, State> {
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
    return this.props.children({
      ...this.getState(),
      onChange: this.changeCount
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
      <div className="border padding">
        <code>{this.state.count}</code>
        <Counter onChange={this.handleChange}>
          {({ onChange }) => (
            <button onClick={onChange('inc')}>increment by two</button>
          )}
        </Counter>
      </div>
    )
  }
}

export class Example extends Component<ExampleProps, ExampleState> {
  static title = 'Render Prop'
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
          {({ count, onChange }) => (
            <div
              className="row border padding"
              style={{ flexFlow: 'column', alignItems: 'center' }}
            >
              <button onClick={onChange('inc')}>inc</button>
              <h3>{count}</h3>
              <button onClick={onChange('dec')}>dec</button>
            </div>
          )}
        </Counter>

        <Counter count={amount} onChange={this.handleCountChange}>
          {({ count, onChange }) => (
            <div className="border padding">
              <button onClick={onChange('inc')}>inc</button>
              <code>{count}</code>
              <button onClick={onChange('dec')}>dec</button>
            </div>
          )}
        </Counter>

        <Counter onChange={this.handleCountChange}>
          {({ count, onChange }) => (
            <div className="border padding">
              <button onClick={onChange('inc')}>inc</button>
              <code>{count}</code>
              <button onClick={onChange('dec')}>dec</button>
            </div>
          )}
        </Counter>
      </div>
    )
  }
}
