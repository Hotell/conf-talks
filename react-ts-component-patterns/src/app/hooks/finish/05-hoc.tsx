import React, { ComponentProps } from 'react'
import { Counter } from './04-render-prop'
import { Subtract } from '../../types'
// ============================================================================

// InjectedProps types meta programing explanation:
// 1. ComponentProps<typeof Counter> -> Counter Props
// 2. 1['children'] -> Props.children
// 3. Parameters<2> -> Props.children arguments
// 4. 3[0] -> first argument ( our props API definition)
type InjectedProps = Parameters<ComponentProps<typeof Counter>['children']>[0]

type ExtendedProps = { maxCount?: number }

const withCounter = <P extends InjectedProps>(Cmp: React.ComponentType<P>) => {
  // Inner Component
  const WithCounter = (props: Subtract<P, InjectedProps> & ExtendedProps) => {
    const { maxCount, ...passThroughProps } = props

    return (
      <Counter>
        {(injectedProps) => {
          if (maxCount && injectedProps.count >= maxCount) {

            return (
              <p className={classes.alertDanger}>
                You've reached maximum count! GO HOME {maxCount}
              </p>
            )
          }

          return (
            // https://github.com/Microsoft/TypeScript/issues/28636
            <Cmp {...injectedProps as P} {...passThroughProps} />
          )
        }}
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

const classes = {
  alertDanger: 'alert alert-danger'
}
