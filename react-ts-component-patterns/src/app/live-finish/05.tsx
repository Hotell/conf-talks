import React, { Component } from 'react'
import { Counter } from '../04-render-prop-component'
import { Subtract } from '../types'
// ============================================================================

type ExtractFuncArguments<T> = T extends (...args: infer A) => any ? A : never

type InjectedProps = ExtractFuncArguments<Counter['props']['children']>[0]
type ExtendedProps = { maxCount?: number }

const withCounter = <P extends InjectedProps>(Cmp: React.ComponentType<P>) => {
  class WithCounter extends Component<
    Subtract<P, InjectedProps> & ExtendedProps
  > {
    static displayName = `WithCounter(${Cmp.name})`

    render() {
      const { maxCount, ...passThroughProps } = this.props as ExtendedProps

      return (
        <Counter>
          {(injectedProps) =>
            maxCount && injectedProps.count >= maxCount ? (
              <p className="alert alert-danger">
                You've reached maximum count! GO HOME {maxCount}
              </p>
            ) : (
              <Cmp {...injectedProps} {...passThroughProps} />
            )
          }
        </Counter>
      )
    }
  }

  return WithCounter
}

class CounterWannabe extends Component<
  InjectedProps & { colorType?: 'primary' | 'secondary' | 'success' }
> {
  render() {
    const { count, onChange, colorType } = this.props

    const cssClass = `alert alert-${colorType}`

    return (
      <div
        style={{ cursor: 'pointer' }}
        className={cssClass}
        onClick={onChange('inc')}
      >
        {count}
      </div>
    )
  }
}

const ExtendedComponent = withCounter(CounterWannabe)

// ============================================================================
export class Example extends Component {
  static title = 'HoC'
  render() {
    return (
      <>
        <ExtendedComponent />
        <ExtendedComponent colorType="secondary" />
        <ExtendedComponent colorType="success" maxCount={3} />
      </>
    )
  }
}
