import React, { Component } from 'react'

type Props =
  | {
      count: number
      onDec: () => void
      onInc: () => void
    }
  | {
      _?: never
    }
type State = typeof initialState

const initialState = { count: 0 }

class Counter extends Component<Props, State> {
  readonly state = initialState

  isControlled(prop: keyof State) {
    // return this.props ? this.props[prop] !== undefined : false
    return prop in this.props
  }
  getState(): State {
    console.log(this.props)
    return {
      count: 'count' in this.props ? this.props.count : this.state.count
    }
  }

  handleInc = () => {
    'count' in this.props
      ? this.props.onInc()
      : this.setState((prevState) => ({ count: prevState.count + 1 }))
  }

  handleDec = () => {
    'count' in this.props
      ? this.props.onDec()
      : this.setState((prevState) => ({ count: prevState.count - 1 }))
  }

  render() {
    return (
      <>
        <button onClick={this.handleInc}>inc</button>
        <code>{this.getState().count}</code>
        <button onClick={this.handleDec}>dec</button>
      </>
    )
  }
}
// ============================================================================

const exampleInitialState = {
  rootCount: 0
}
type ExampleState = typeof exampleInitialState
type ExampleProps = {}

export class Example extends Component<ExampleProps, ExampleState> {
  state = exampleInitialState
  handleInc = () => {
    this.setState((prevState) => ({ rootCount: prevState.rootCount + 1 }))
  }
  handleDec = () => {
    this.setState((prevState) => ({ rootCount: prevState.rootCount - 1 }))
  }
  render() {
    const { rootCount } = this.state
    return (
      <div className="row flex-spaces flex-middle">
        <div>Root count: {rootCount}</div>
        <Counter />
        {/* $ExpectError */}
        {/* <Counter count={12} /> */}
        <Counter
          count={rootCount}
          onInc={this.handleInc}
          onDec={this.handleDec}
        />
      </div>
    )
  }
}
