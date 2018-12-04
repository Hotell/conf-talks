import React, { Component } from 'react'
import {
  Link,
  RouteComponentProps,
  NavLink,
  Route,
  Switch
} from 'react-router-dom'

import { RouterOutlet, RouterOutletProps } from '../../../lib/rr-ear'

import { routes } from './topics.routing'
import { Topic } from './topic'

type Props = RouterOutletProps
// type Props = RouteComponentProps

const links = (path: string) => [
  {
    path: `${path}/rendering`,
    title: 'Rendering with React'
  },
  { path: `${path}/components`, title: 'Components' },
  { path: `${path}/props-v-state`, title: 'Props v. State' }
]

export class Topics extends Component<Props> {
  render() {
    const { match } = this.props
    return (
      <div>
        <h2>Topics</h2>
        <ul>
          {links(match.url).map((link) => (
            <li key={link.path}>
              <NavLink to={link.path}>{link.title}</NavLink>
            </li>
          ))}
        </ul>

        {/*
        // START
        // =====
        */}
        {/* <Switch>
          <Route path={`${this.props.match.path}/:topicId`} component={Topic} />
        </Switch> */}

        {/* // 1. use injected routes for outlet */}
        {/* <RouterOutlet routes={this.props.routes} /> */}

        {/*
        // FINISH
        // ======
        */}
        {/* // 2. use local routers config when lazy loading */}
        <RouterOutlet routes={routes} />
      </div>
    )
  }
}
