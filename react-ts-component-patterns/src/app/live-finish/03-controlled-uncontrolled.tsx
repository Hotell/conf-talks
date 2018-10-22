import React, { Component } from 'react'
import { Button } from './02-stateless-stateful'
// ============================================================================

type State = typeof initialState
type Props = { count?: number } & typeof defaultProps

const initialState = { count: 0 }
const defaultProps = {
  onChange: (value: number) => {}
}
class Counter extends Component<Props, State> {
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
    return (
      <div className="border row">
        <Button onClick={this.handleInc}>👍</Button>
        <h3>{this.getState().count}</h3>
        <Button onClick={this.handleDec}>👎</Button>
      </div>
    )
  }
}

// ============================================================================
export class Example extends Component<{}, State> {
  static title = 'Un/Controlled'
  state = initialState
  handleChange = (newCount: number) => {
    this.setState((state) => ({ count: newCount }))
  }
  render() {
    return (
      <>
        <h3>Root count: {this.state.count}</h3>
        <Counter />
        <Counter count={this.state.count} onChange={this.handleChange} />
        <Counter onChange={this.handleChange} />
      </>
    )
  }
}
