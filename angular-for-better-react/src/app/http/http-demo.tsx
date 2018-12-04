import React, { Component } from 'react'
import { DependencyProvider } from '@martin_hotell/rea-di'
import { registerHttpClientProviders } from '@martin_hotell/axios-http'

import { baseURL } from '../config'

// import { SwCharacter } from './start'
import { SwCharactersService, SwCharacter } from './finish'

type Props = {} & import('react-router-dom').RouteComponentProps
export class HttpDemo extends Component<Props> {
  render() {
    // Start:
    // ======
    // return <SwCharacter />

    // Finish:
    // 4. register providers
    // =======
    return (
      <DependencyProvider
        providers={[
          registerHttpClientProviders({ baseURL }),
          SwCharactersService
        ]}
      >
        <SwCharacter />
      </DependencyProvider>
    )
  }
}
