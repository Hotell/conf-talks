import React, { ComponentProps } from 'react'
import { Counter } from './04-render-prop'
import { Subtract } from '../../types'
// ============================================================================

type InjectedProps = Parameters<ComponentProps<typeof Counter>['children']>[0]
type ExtendedProps = { maxCount?: number }

const withCounter = <P extends InjectedProps>(Cmp: React.ComponentType<P>) => {
  const WithCounter = (props: Subtract<P, InjectedProps> & ExtendedProps) => {
    const { maxCount, ...passThroughProps } = props

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

  WithCounter.displayName = `WithCounter(${Cmp.name})`

  return WithCounter
}

type CounterWannabeProps = InjectedProps & { colorType?: ColorTypes }

const CounterWannabe = (props: CounterWannabeProps) => {
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
export const Example = () => {
  return (
    <>
      <ExtendedComponent />
      <ExtendedComponent colorType="secondary" />
      <ExtendedComponent colorType="success" maxCount={3} />
    </>
  )
}
Example.title = 'HoC'

// ============================================================================
// Helpers
type ColorTypes = 'primary' | 'secondary' | 'success'
