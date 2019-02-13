import React, { Component, ComponentType, ComponentProps } from 'react'
import { ElementConfig, Diff } from '@martin_hotell/rex-tils'

import { Counter } from './04-render-prop'
import { Subtract, ExtractFuncArguments } from '../types'
// ===========================================

// ============================================================================

type InjectedProps = ExtractFuncArguments<
  ComponentProps<typeof Counter>['children']
>[0]
type ExtendedProps = { maxCount?: number }

const withCounter = <P extends InjectedProps>(Cmp: ComponentType<P>) => {
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
              <Cmp {...injectedProps} {...passThroughProps as P} />
            )
          }
        </Counter>
      )
    }
  }

  return WithCounter
}

type CounterProps = InjectedProps & typeof defaultProps

const defaultProps = {
  colorType: 'primary' as 'primary' | 'secondary' | 'success'
}
class CounterWannabe extends Component<CounterProps> {
  static defaultProps = defaultProps
  render() {
    const { count, inc, colorType } = this.props

    const cssClass = `alert alert-${colorType}`

    return (
      <div style={{ cursor: 'pointer' }} className={cssClass} onClick={inc}>
        {count}
      </div>
    )
  }
}

const ExtendedComponent = withCounter(CounterWannabe as React.ComponentType<
  JSX.LibraryManagedAttributes<typeof CounterWannabe, CounterProps>
>)

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
