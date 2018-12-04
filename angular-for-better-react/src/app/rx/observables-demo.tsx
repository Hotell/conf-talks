import React, { Component } from 'react'
import { DependencyProvider } from '@martin_hotell/rea-di'
import { registerHttpClientProviders } from '@martin_hotell/axios-http'

import { baseURL } from '../config'

// import { SwSearch } from './start/sw-search'
import { SwSearch } from './finish/sw-search'

type Props = {} & import('react-router-dom').RouteComponentProps
export class ObservablesDemo extends Component<Props> {
  render() {
    return (
      <DependencyProvider
        providers={[registerHttpClientProviders({ baseURL })]}
      >
        <SwSearch />
      </DependencyProvider>
    )
  }
}
