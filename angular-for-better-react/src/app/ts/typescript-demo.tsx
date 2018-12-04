import React, { Component } from 'react'

// 1. implement greeter
// import { Greeter } from './start'

import { Greeter } from './finish'
import { Counter } from './finish'

type Props = {} & import('react-router-dom').RouteComponentProps

export class TypescriptDemo extends Component<Props> {
  // START
  // =====
  // render() {
  //   return <section>Hello TS</section>
  // }

  // FINISH
  // =====
  render() {
    return (
      <section>
        <Greeter greeting="Hello" who="World" />
        <Greeter who="FrontendCon" color="red" />
        <br />
        <br />
        <Counter>
          {(props) => (
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
