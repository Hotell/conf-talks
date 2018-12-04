import React, { Component } from 'react'
import { NavLink, Switch, Route } from 'react-router-dom'
import { RouterOutlet } from '../../lib/rr-ear'

import { routes } from './app.routing'
import Home from './home'
import About from './about'
import Topics from './topics'
import NotFound from './not-found'

type Props = {} & import('react-router-dom').RouteComponentProps

const links = (path: string) => [
  { path: `${path}`, title: `Home`, exact: true },
  { path: `${path}/about`, title: `About` },
  { path: `${path}/topics`, title: `Topics` },
  { path: `${path}/i-dont-exist`, title: `Not found` }
]

export class RouterDemo extends Component<Props> {
  render() {
    return (
      <>
        <ul>
          {links(this.props.match.url).map((link) => (
            <li key={link.path}>
              <NavLink exact={Boolean(link.exact)} to={link.path}>
                {link.title}
              </NavLink>
            </li>
          ))}
        </ul>

        {/*
          // START
          // =====
        */}

        {/* <Switch>
          <Route exact path={this.props.match.url} component={Home} />
          <Route path={`${this.props.match.url}/about`} component={About} />
          <Route path={`${this.props.match.url}/topics`} component={Topics} />
          <Route component={NotFound} />
        </Switch> */}

        {/*
          // FINISH
          // 1. with config
          // ==============
        */}
        <RouterOutlet routes={routes} />
      </>
    )
  }
}
