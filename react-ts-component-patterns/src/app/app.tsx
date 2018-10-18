import React, { Component } from 'react'

import { Example as Example01 } from './01-react-components-intro'
import { Example as Example02 } from './02-stateful-stateless'
import { Example as Example03 } from './03-controlled-components'
import { Example as Example04 } from './04-render-prop-component'
import { Example as Example05 } from './05-high-order-component'
import { LiveApp } from './live'

export class App extends Component {
  render() {
    return <LiveApp />
    // return (
    //   <main className="row">
    //     <div className="col col-12">It works!</div>
    //     {[Example01, Example02, Example03, Example04, Example05].map(
    //       (Demo, idx) => (
    //         <div key={idx} className="paper col col-12">
    //           <h4>{Demo.title}</h4>
    //           <Demo />
    //         </div>
    //       )
    //     )}
    //   </main>
    // )
  }
}
