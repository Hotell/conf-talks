import React, { Component, ComponentType } from 'react'

import { FuncArguments, Subtract } from './types'
import { Counter } from './04-render-prop-component'

type InjectedProps = FuncArguments<Counter['props']['children']>[0]

const withCounter = <P extends InjectedProps>(Cmp: ComponentType<P>) => {
  class WithCounter extends Component<Subtract<P, InjectedProps>> {
    static displayName = `WithCounter(${Cmp.name})`
    static WrappedComponent = Cmp

    render() {
      return <Counter>{(props) => <Cmp {...props} {...this.props} />}</Counter>
    }
  }

  return WithCounter
}

type Props = {
  colorType?: 'primary' | 'secondary' | 'success'
} & InjectedProps
class CounterWannabe extends Component<Props> {
  render() {
    const { count, onChange, colorType = 'primary' } = this.props
    const cssClass = `alert alert-${colorType}`

    return (
      <div className={cssClass} onClick={onChange('inc')}>
        {count}
      </div>
    )
  }
}

const ExtendedComponent = withCounter(CounterWannabe)

// ============================================================================

const exampleInitialState = {
  amount: 0
}
type ExampleState = typeof exampleInitialState
type ExampleProps = {}

export class Example extends Component<ExampleProps, ExampleState> {
  static title = 'HoC'
  state = exampleInitialState

  handleCountChange = (count: number) => {
    this.setState(() => ({ amount: count }))
  }

  render() {
    const { amount } = this.state
    return (
      <div className="row flex-spaces flex-middle">
        <div>Root count: {amount}</div>
        <ExtendedComponent />
        <ExtendedComponent colorType="success" />
        <ExtendedComponent.WrappedComponent
          count={99}
          onChange={() => console.log.bind(null, 'click')}
        />
      </div>
    )
  }
}
