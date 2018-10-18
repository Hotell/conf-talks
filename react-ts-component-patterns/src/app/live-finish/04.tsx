import React, { Component } from 'react'
import { Button } from './02'
// ============================================================================

type State = typeof initialState
type Props = {
  children: (
    props: State & { inc: Counter['handleInc']; dec: Counter['handleDec'] }
  ) => React.ReactChild
  count?: number
} & typeof defaultProps

const initialState = { count: 0 }
const defaultProps = {
  onChange: (value: number) => {}
}
export class Counter extends Component<Props, State> {
  static defaultProps = defaultProps

  state = initialState

  getState() {
    return {
      count: this.props.count ? this.props.count : this.state.count
    }
  }

  handleChange = (type: 'inc' | 'dec') => () => {
    const typeMap = { inc: 1, dec: -1 }

    if (this.props.count) {
      this.props.onChange(this.getState().count + typeMap[type])
    } else {
      this.setState(
        (state) => ({ count: state.count + typeMap[type] }),
        () => {
          this.props.onChange(this.getState().count)
        }
      )
    }
  }

  handleInc = this.handleChange('inc')
  handleDec = this.handleChange('dec')

  render() {
    return this.props.children({
      ...this.getState(),
      dec: this.handleDec,
      inc: this.handleInc
    })

    // return (
    //   <div className="border row">
    //     <Button onClick={this.handleInc}>👍</Button>
    //     <h3>{this.getState().count}</h3>
    //     <Button onClick={this.handleDec}>👎</Button>
    //   </div>
    // )
  }
}

// ============================================================================

const CounterWithButtons = () => (
  <Counter>
    {({ count, dec, inc }) => (
      <div className="border row">
        <h5 className="alert alert-warning">{count}</h5>
        <Button onClick={inc}>👍</Button>
        <Button onClick={dec}>👎</Button>
      </div>
    )}
  </Counter>
)

export class Example extends Component {
  static title = 'Render Props'

  state = initialState
  handleChange = (newCount: number) => {
    this.setState((state) => ({ count: newCount }))
  }

  render() {
    return (
      <>
        <h3>Root count: {this.state.count}</h3>
        <CounterWithButtons />
        <Counter>
          {({ count, dec, inc }) => (
            <div className="border row">
              <Button onClick={inc}>👍</Button>
              <Button onClick={dec}>👎</Button>
              <h5 className="alert alert-secondary">{count}</h5>
            </div>
          )}
        </Counter>
        <Counter count={this.state.count} onChange={this.handleChange}>
          {({ count, dec, inc }) => (
            <div className="border row" style={{flexDirection: 'column', alignItems:'center'}}>
              <Button onClick={inc}>👍</Button>
              <h5>{count}</h5>
              <Button onClick={dec}>👎</Button>
            </div>
          )}
        </Counter>
      </>
    )
  }
}
