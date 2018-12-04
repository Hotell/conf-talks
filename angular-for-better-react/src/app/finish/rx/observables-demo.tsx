import React, { Component } from 'react'
import { DependencyProvider } from '@martin_hotell/rea-di'
import { registerHttpClientProviders } from '@martin_hotell/axios-http'

import { SwSearch } from './sw-search'

type Props = {} & import('react-router-dom').RouteComponentProps
export class ObservablesDemo extends Component<Props> {
  render() {
    return (
      <DependencyProvider
        providers={[
          registerHttpClientProviders({ baseURL: 'https://swapi.co/api' }),
        ]}
      >
        <SwSearch />
      </DependencyProvider>
    )
  }
}
