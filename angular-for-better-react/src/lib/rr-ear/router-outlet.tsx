import React, {
  Component,
  Suspense,
  isValidElement,
  ComponentType,
  ExoticComponent,
  ReactChild,
  ReactNode,
} from 'react'
import {
  RouteProps,
  Route,
  Switch,
  RouteComponentProps,
  withRouter,
} from 'react-router-dom'

export type RouteConfig = Pick<RouteProps, 'exact' | 'path'> & {
  component: NonNullable<RouteProps['component']>
  children?: RouteConfig[]
}

export type RouterOutletProps = {
  routes?: RouteConfig[]
} & RouteComponentProps

const LazyRoute = ({
  isExotic,
  fallback,
  children,
}: {
  isExotic?: boolean
  children: ReactChild
  fallback?: NonNullable<ReactNode> | null
}) =>
  isExotic ? (
    <Suspense fallback={fallback!}>{children}</Suspense>
  ) : (
    (children as JSX.Element)
  )
LazyRoute.defaultProps = {
  isExotic: false,
  fallback: 'Loading...',
}

class RouterOutlet extends Component<RouterOutletProps> {
  _normalizePath(path: string) {
    const lastIdx = path.length - 1
    const lastChar = path[lastIdx]

    return lastChar === '/' ? path.slice(0, lastIdx) : path
  }
  _isPromise<T>(value: any): value is Promise<T> {
    return 'then' in value
  }
  _isString(value: any): value is string {
    return typeof value === 'string'
  }
  _isFunction(value: any): value is Function {
    return typeof value === 'function'
  }
  _isExoticComponent<P extends {}>(
    cmp: ComponentType<P>
  ): cmp is ExoticComponent<P> {
    return '$$typeof' in cmp
  }
  _configureRoutes(routes: RouteConfig[]) {
    const { routes: _, ...routerProps } = this.props

    return (
      <Switch>
        {routes.map(route => {
          const path = String(route.path)
          const isCatchAll = route.path === '**'
          const hasChildren = Boolean(route.children)
          const Cmp = route.component
          const normalizedRoute = `${routerProps.match.path}/${path}`.replace(
            /\/\//,
            '/'
          )
          const isExact = normalizedRoute.endsWith('/')
          const isExotic = this._isExoticComponent(Cmp)

          console.log({ route, routerProps, normalizedRoute })

          if (isCatchAll) {
            return (
              <Route
                key={normalizedRoute}
                render={props => <Cmp {...props} />}
              />
            )
          }

          if (hasChildren) {
            return (
              <Route path={normalizedRoute} key={normalizedRoute}>
                {props => (
                  <LazyRoute isExotic={isExotic}>
                    <Cmp {...props} routes={route.children} />
                  </LazyRoute>
                )}
              </Route>
            )
          }

          return (
            <Route
              key={normalizedRoute}
              exact={isExact}
              path={normalizedRoute}
              render={props => (
                <LazyRoute isExotic={isExotic}>
                  <Cmp {...props} />
                </LazyRoute>
              )}
            />
          )
        })}
      </Switch>
    )
  }
  render() {
    const routesConfig = this.props.routes
      ? this._configureRoutes(this.props.routes)
      : null

    return routesConfig
  }
}

const Enhanced = withRouter(RouterOutlet)

export { Enhanced as RouterOutlet }
