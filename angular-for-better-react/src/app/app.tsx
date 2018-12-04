import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  NavLink
} from 'react-router-dom'
import { TypescriptDemo } from './ts/typescript-demo'
import { DiDemo } from './di/di-demo'
import { HttpDemo } from './http/http-demo'
import { RouterDemo } from './router/router-demo'
import { ObservablesDemo } from './rx/observables-demo'
import { SchematicsDemo } from './schematics/schematics-demo'

// import { Root as RootFinish } from './root'
// import { Root as RootStart, Root } from './start/root'

const links = [
  { path: '/typescript', title: 'TypeScript' },
  { path: '/di', title: 'di' },
  { path: '/http', title: 'http' },
  { path: '/router', title: 'router' },
  { path: '/observables', title: 'rx' },
  { path: '/schematics', title: 'schematics' }
]
const routes = [
  { path: '/typescript', component: TypescriptDemo },
  { path: '/di', component: DiDemo },
  { path: '/http', component: HttpDemo },
  { path: '/router', component: RouterDemo },
  { path: '/observables', component: ObservablesDemo },
  { path: '/schematics', component: SchematicsDemo }
]

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
              {links.map((link) => (
                <li key={link.path}>
                  <NavLink to={`${link.path}`}>{link.title}</NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      <div className="container padding-top">
        <Switch>
          {routes.map(({ path, ...rest }) => (
            <Route
              key={path}
              path={`${path}`}
              render={(props) => {
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

          <Route render={() => <div>Choose your destiny...</div>} />
        </Switch>
      </div>
    </main>
  </Router>
)
