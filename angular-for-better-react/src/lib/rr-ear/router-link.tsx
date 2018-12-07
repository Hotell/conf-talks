import React, { Component } from 'react'
import {
  RouteComponentProps,
  NavLink,
  withRouter,
  NavLinkProps
} from 'react-router-dom'
import { Omit } from './types'

interface NavigationExtras {
  queryParams?: { [key: string]: unknown }
  fragment?: string
  preserveFragment?: boolean
  queryParamsHandling?: 'merge' | 'preserve' | 'default'
}

type Props = { to: string } & NavigationExtras &
  RouteComponentProps &
  Omit<NavLinkProps, 'to'>
class RouterLink extends Component<Props> {
  render() {
    const {
      children,
      match,
      location,
      history,
      staticContext,
      fragment,
      preserveFragment,
      queryParams,
      queryParamsHandling,
      to,
      exact,
      isActive: isActiveHandler,
      ...navProps
    } = this.props

    const { isOneLevelUp, isExact, ...linkToConfig } = normalizePath(
      match.url,
      to,
      {
        fragment,
        preserveFragment,
        queryParams,
        queryParamsHandling
      }
    )

    const isActive =
      isActiveHandler ||
      ((
        match: RouteComponentProps['match'],
        location: RouteComponentProps['location']
      ) => {
        if (!match) {
          return false
        }
        return isOneLevelUp ? false : true
      })

    console.log({ linkToConfig })

    return (
      <NavLink
        {...navProps}
        to={linkToConfig}
        exact={exact || isExact}
        isActive={isActive}
      >
        {children}
      </NavLink>
    )
  }
}

function normalizePath(
  matchedPath: string,
  providedPath: string,
  extras: NavigationExtras
) {
  const [relativePrefix] = providedPath.match(/^\.+\//) || ['']
  const isRelative = Boolean(relativePrefix)
  const isAbsolute = providedPath.startsWith('/')

  const fragment = resolveFragment(
    extras.fragment,
    extras.preserveFragment,
    location.hash
  )

  const query = buildQueryParams(
    extras.queryParams,
    parseQueryString(location.search),
    extras.queryParamsHandling
  )

  console.log({ relativePrefix, isRelative, providedPath })

  if (isAbsolute) {
    return {
      isExact: false,
      isOneLevelUp: false,
      hash: fragment,
      search: query,
      pathname: providedPath
    }
  }

  if (isRelative && relativePrefix.length > 3) {
    throw new Error(
      `more than one level up relative paths are not supported -> ${relativePrefix}`
    )
  }

  const isOneLevelUp = relativePrefix.length === 3
  const normalizedProvidedPath = isRelative
    ? providedPath.slice(relativePrefix.length)
    : providedPath

  const finalPath = `${matchedPath}/${normalizedProvidedPath}`.replace(
    /\/\//,
    '/'
  )

  const isExact = finalPath.endsWith('/')
  const normalized = {
    isExact,
    isOneLevelUp,
    hash: fragment,
    search: query,
    pathname: isExact ? finalPath.slice(0, -1) : finalPath
  }

  return normalized
}

type Params = { [key: string]: any }

function resolveFragment(
  fragment: string | undefined,
  preserve?: boolean,
  currentHash?: string
) {
  if (preserve && fragment) {
    throw new Error('you cannot both set and preserve a fragment')
  }

  if (preserve) {
    return currentHash
  }

  return fragment
}

function buildQueryParams(
  params: Params = {},
  currentParams: Params,
  paramsHandling: NavigationExtras['queryParamsHandling'] = 'default'
) {
  const queryToParse = normalizeQueryToParse(
    params,
    currentParams,
    paramsHandling
  )

  const queryString = stringifyQueryParams(queryToParse)

  return queryString

  function normalizeQueryToParse(
    params: Params,
    currentParams: Params,
    paramsHandling: NavigationExtras['queryParamsHandling'] = 'default'
  ) {
    if (paramsHandling === 'preserve') {
      return currentParams
    }
    if (paramsHandling === 'merge') {
      return { ...currentParams, ...params }
    }

    return params
  }
}

function parseQueryString(query: string) {
  const normalizedQuery = query.startsWith('?') ? query.slice(1) : query
  return normalizedQuery.split('&').reduce(
    (acc, pair) => {
      const [key, value] = pair.split('=')
      const obj = { [key]: value }
      return { ...acc, ...obj }
    },
    {} as Params
  )
}

function stringifyQueryParams(params: Params) {
  return Object.keys(params)
    .reduce(
      (acc, nextKey) => {
        const value = params[nextKey]
        const pair = `${nextKey}=${encodeURIComponent(value)}`
        return [...acc, pair]
      },
      [] as string[]
    )
    .join('&')
}

const EnhancedRouterLink = withRouter(RouterLink)

export { EnhancedRouterLink as RouterLink }
