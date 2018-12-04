import React, { Component } from 'react'
import { Greeter } from './greeter'
import { Counter } from './counter'

type Props = {} & import('react-router-dom').RouteComponentProps

export class TypescriptDemo extends Component<Props> {
  render() {
    return (
      <section>
        <Greeter greeting="Hello" who="World!" />
        <Greeter who="FrontendCon!" />
        <hr />
        <Counter>
          {props => (
            <>
              <button onClick={props.inc}>+</button>
              <b className="padding">{props.count}</b>
              <button onClick={props.dec}>-</button>
            </>
          )}
        </Counter>
      </section>
    )
  }
}
