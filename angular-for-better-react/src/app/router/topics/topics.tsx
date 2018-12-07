import React, { Component } from 'react'
import {
  Link,
  RouteComponentProps,
  NavLink,
  Route,
  Switch
} from 'react-router-dom'

import {
  RouterOutlet,
  RouterOutletProps,
  RouterLink
} from '../../../lib/rr-ear'

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

const relativeLinks = [
  {
    path: 'rendering',
    title: 'Rendering with React'
  },
  { path: 'components', title: 'Components' },
  { path: './props-v-state', title: 'Props vs. State (relative)' },
  { path: '/typescript', title: 'TS Demo (absolute path)' },
  { path: '../', title: 'one level up (relative)' }
]

export class Topics extends Component<Props> {
  render() {
    const { match } = this.props
    return (
      <div>
        <h2>Topics</h2>
        <ul>
          {relativeLinks.map((link) => (
            <li key={link.path}>
              <RouterLink to={link.path}>{link.title}</RouterLink>
            </li>
          ))}
        </ul>

        {/* <ul>
          {links(match.url).map((link) => (
            <li key={link.path}>
              <NavLink to={link.path}>{link.title}</NavLink>
            </li>
          ))}
        </ul> */}

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
