import React, { Component } from 'react'
import { DependencyProvider, Inject } from '@martin_hotell/rea-di'

// import { Todos } from './di-showcase/start'
// import { Logger } from './di-showcase/start'

// import { Todos } from './di-showcase/finish'
import { Logger } from './di-showcase/finish'

// import { Todos, TodoService } from './di-for-state-management/start'
import { Todos, TodoService } from './di-for-state-management/finish'

type Props = {} & import('react-router-dom').RouteComponentProps

export class DiDemo extends Component<Props> {
  render() {
    // Start
    // =====
    // return (
    //   <>
    //     <Todos />
    //   </>
    // )

    // 1. Inject via Render prop
    // =================
    // return (
    //   <>
    //     <DependencyProvider providers={[Logger]}>
    //       <Inject values={[Logger]}>
    //         {logger => <Todos logger={logger} />}
    //       </Inject>
    //     </DependencyProvider>
    //   </>
    // )

    // 2. Inject via HoC
    // =================
    // return (
    //   <>
    //     <DependencyProvider providers={[Logger]}>
    //       <Todos />
    //     </DependencyProvider>
    //   </>
    // )

    // 3. Stateful Service
    // ===================
    return (
      <>
        <DependencyProvider providers={[Logger, TodoService]}>
          <Inject values={[TodoService]}>
            {(todoService) => <Todos todoService={todoService} />}
          </Inject>
        </DependencyProvider>
      </>
    )
  }
}
