import React, { Component, ComponentProps } from 'react'
import { Counter } from './04-render-prop'
import { Subtract, ExtractFuncArguments } from '../types'
// ============================================================================

type InjectedProps = ExtractFuncArguments<ComponentProps<typeof Counter>['children']>[0]
type ExtendedProps = { maxCount?: number }

const withCounter = <P extends InjectedProps>(Cmp: React.ComponentType<P>) => {
  class WithCounter extends Component<
    Subtract<P, InjectedProps> & ExtendedProps
  > {
    static displayName = `WithCounter(${Cmp.name})`

    render() {
      const { maxCount, ...passThroughProps } = this.props

      return (
        <Counter>
          {(injectedProps) =>
            maxCount && injectedProps.count >= maxCount ? (
              <p className="alert alert-danger">
                You've reached maximum count! GO HOME {maxCount}
              </p>
            ) : (
              // https://github.com/Microsoft/TypeScript/issues/28636
              <Cmp  {...injectedProps} {...passThroughProps as P}  />
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
    const { count, inc, colorType } = this.props

    const cssClass = `alert alert-${colorType}`

    return (
      <div
        style={{ cursor: 'pointer' }}
        className={cssClass}
        onClick={inc}
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
