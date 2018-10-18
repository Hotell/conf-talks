import React, { Component, ComponentType } from 'react'
import { Counter } from './04-render-prop-component'

type Omit<T, K> = Pick<T, Exclude<keyof T, K>>
type FuncArguments<T> = T extends (...any: infer A) => any ? A : never
type DefaultPropsOf<T> = T extends { defaultProps: infer D } ? D : never

type InjectedProps = FuncArguments<Counter['props']['children']>[0]

const withCounter = <OriginalProps extends Partial<InjectedProps>>(
  Cmp: ComponentType<OriginalProps>
) => {
  // type OriginalDefaultProps = DefaultPropsOf<typeof Cmp>
  type NewProps = Partial<Omit<OriginalProps, keyof InjectedProps>>
  // Partial<OriginalDefaultProps>

  // Partial<OriginalDefaultProps>

  class WithCounter extends Component<NewProps> {
    static displayName = `WithCounter(${Cmp.name})`
    render() {
      const props = this.props
      return (
        <Counter>
          {({ count, changeCount }) => {
            return <Cmp count={count} changeCount={changeCount} {...props} />
          }}
        </Counter>
      )
    }
  }

  return WithCounter
}

const defaultProps = {
  colorType: 'primary' as 'primary' | 'secondary' | 'success'
}
class CounterWannabe extends Component<InjectedProps & typeof defaultProps> {
  static defaultProps = defaultProps
  render() {
    const { count, changeCount, colorType } = this.props
    const cssClass = `alert alert-${colorType}`

    return (
      <div className={cssClass} onClick={changeCount('inc')}>
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
  state = exampleInitialState

  handleCountChange = (count: number) => {
    this.setState((prevState) => ({ amount: count }))
  }

  render() {
    const { amount } = this.state
    return (
      <div className="row flex-spaces flex-middle">
        <div>Root count: {amount}</div>
        <ExtendedComponent />
        <ExtendedComponent colorType="success" />
      </div>
    )
  }
}
