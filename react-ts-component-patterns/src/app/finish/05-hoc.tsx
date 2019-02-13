import React, { Component, ComponentProps } from 'react'
import { Counter } from './04-render-prop'
import { Subtract } from '../types'
// ============================================================================

type InjectedProps = Parameters<ComponentProps<typeof Counter>['children']>[0]
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
              <Cmp {...injectedProps as P} {...passThroughProps} />
            )
          }
        </Counter>
      )
    }
  }

  return WithCounter
}

const CounterWannabe = (props: InjectedProps & { colorType?: ColorTypes }) => {
  const { count, inc, colorType } = props

  const classes = `alert alert-${colorType}`

  return (
    <div style={{ cursor: 'pointer' }} className={classes} onClick={inc}>
      {count}
    </div>
  )
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

// ============================================================================
// Helpers
type ColorTypes = 'primary' | 'secondary' | 'success'
