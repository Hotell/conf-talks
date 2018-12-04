import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import { Root as RootFinish } from './finish/root'
import { Root as RootStart, Root } from './start/root'

export const App = () => (
  <Router>
    <main>
      <nav className="border split-nav">
        <div className="nav-brand">
          <h3>
            <Link to="/">Angular for React</Link>
          </h3>
        </div>
        <div className="collapsible">
          <input id="collapsible1" type="checkbox" name="collapsible1" />
          <button>
            <label htmlFor="collapsible1">
              <div className="bar1" />
              <div className="bar2" />
              <div className="bar3" />
            </label>
          </button>
          <div className="collapsible-body">
            <ul className="inline">
              <li>
                <Link to="/start">Start</Link>
              </li>
              <li>
                <Link to="/finish">Finish</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container">
        <Switch>
          <Route path="/start" component={RootStart} />
          <Route path="/finish" component={RootFinish} />
          <Route render={() => <div>Choose your destiny...</div>} />
        </Switch>
      </div>
    </main>
  </Router>
)
