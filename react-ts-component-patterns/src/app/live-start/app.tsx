import React, { Component } from 'react'

import { Example as E1 } from './01'
import { Example as E2 } from './02'
import { Example as E3 } from './03'
import { Example as E4 } from './04'
import { Example as E5 } from './05'

export class LiveApp extends Component {
  render() {
    return (
      <main className="row">
        {[E1, E2, E3, E4, E5].map((Demo, idx) => (
          <div key={idx} className="paper col col-12 demo-example-margin">
            <h4>{Demo.title}</h4>
            <Demo />
          </div>
        ))}
      </main>
    )
  }
}