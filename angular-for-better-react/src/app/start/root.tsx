import React from 'react'
import { Link, Route, RouteComponentProps } from 'react-router-dom'

import { TypescriptDemo } from './ts/typescript-demo'
import { DiDemo } from './di/di-demo'
import { RouterDemo } from './router/router-demo'
import { ObservablesDemo } from './rx/observables-demo'

const links = [
  { path: '/typescript', title: 'TypeScript' },
  { path: '/di', title: 'di' },
  { path: '/router', title: 'router' },
]
const routes = [
  { path: '/typescript', component: TypescriptDemo },
  { path: '/di', component: DiDemo },
  { path: '/router', component: RouterDemo },
  { path: '/observables', component: ObservablesDemo },
]
export const Root = (props: RouteComponentProps) => {
  return (
    <section>
      <nav>
        {links.map(link => (
          <li key={link.path}>
            <Link to={`${props.match.url}${link.path}`}>{link.title}</Link>
          </li>
        ))}
      </nav>
      <div>
        {routes.map(({ path, ...rest }) => (
          <Route key={path} path={`${props.match.path}${path}`} {...rest} />
        ))}
      </div>
    </section>
  )
}
