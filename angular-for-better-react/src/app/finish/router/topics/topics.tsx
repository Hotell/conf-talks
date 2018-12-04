import React, { Component } from 'react'
import { Link, RouteComponentProps, NavLink } from 'react-router-dom'

import { RouterOutlet } from '../../../../lib/rr-ear'

import { routes } from './topics.routing'

type Props = RouteComponentProps

const links = (path: string) => [
  {
    path: `${path}/rendering`,
    title: 'Rendering with React',
  },
  { path: `${path}/components`, title: 'Components' },
  { path: `${path}/props-v-state`, title: 'Props v. State' },
]

export class Topics extends Component<Props> {
  render() {
    const { match } = this.props
    return (
      <div>
        <h2>Topics</h2>
        <ul>
          {links(match.url).map(link => (
            <li key={link.path}>
              <NavLink to={link.path}>{link.title}</NavLink>
            </li>
          ))}
        </ul>

        <RouterOutlet routes={routes} />
      </div>
    )
  }
}
