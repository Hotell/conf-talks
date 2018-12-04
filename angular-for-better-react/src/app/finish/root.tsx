import React from 'react'
import { Link, Route, RouteComponentProps, NavLink } from 'react-router-dom'

import { TypescriptDemo } from './ts/typescript-demo'
import { DiDemo } from './di/di-demo'
import { HttpDemo } from './http/http-demo'
import { RouterDemo } from './router/router-demo'
import { ObservablesDemo } from './rx/observables-demo'

const links = [
  { path: '/typescript', title: 'TypeScript' },
  { path: '/di', title: 'di' },
  { path: '/http', title: 'http' },
  { path: '/router', title: 'router' },
  { path: '/observables', title: 'rx' },
]
const routes = [
  { path: '/typescript', component: TypescriptDemo },
  { path: '/di', component: DiDemo },
  { path: '/http', component: HttpDemo },
  { path: '/router', component: RouterDemo },
  { path: '/observables', component: ObservablesDemo },
]
export const Root = (props: RouteComponentProps) => {
  return (
    <section>
      <ul className="inline padding-bottom">
        {links.map(link => (
          <li key={link.path}>
            <NavLink
              to={`${props.match.url}${link.path}`}
              className="paper-btn"
            >
              {link.title}
            </NavLink>
          </li>
        ))}
      </ul>

      <>
        {routes.map(({ path, ...rest }) => (
          <Route
            key={path}
            path={`${props.match.path}${path}`}
            render={props => {
              return (
                <div className="demo-view">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title">
                        {(rest.component as any).name}
                      </h4>
                      <div className="card-text">
                        <rest.component {...props} />
                      </div>
                    </div>
                  </div>
                </div>
              )
            }}
          />
        ))}
      </>
    </section>
  )
}
