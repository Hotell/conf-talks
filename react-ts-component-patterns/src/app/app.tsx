import React, { Component } from 'react'

import { Example as Example01 } from './01-react-components-intro'
import { Example as Example02 } from './02-stateful-stateless'
import { Example as Example03 } from './03-controlled-components'

export class App extends Component {
  render() {
    return (
      <main className="row">
        <div className="col col-12">It works!</div>
        {[Example01, Example02, Example03].map((Demo, idx) => (
          <div key={idx} className="paper col col-12">
            <Demo />
          </div>
        ))}
      </main>
    )
  }
}
