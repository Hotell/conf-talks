import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { RouterOutlet } from '../../../lib/rr-ear'

import { routes } from './app.routing'

type Props = {} & import('react-router-dom').RouteComponentProps

const links = (path: string) => [
  { path: `${path}`, title: `Home`, exact: true },
  { path: `${path}/about`, title: `About` },
  { path: `${path}/topics`, title: `Topics` },
  { path: `${path}/i-dont-exist`, title: `Not found` },
]

export class RouterDemo extends Component<Props> {
  render() {
    return (
      <>
        <ul>
          {links(this.props.match.url).map(link => (
            <li key={link.path}>
              <NavLink exact={Boolean(link.exact)} to={link.path}>
                {link.title}
              </NavLink>
            </li>
          ))}
        </ul>
        <RouterOutlet routes={routes} />
      </>
    )
  }
}
