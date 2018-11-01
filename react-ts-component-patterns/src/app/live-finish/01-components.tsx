import React, { Component } from 'react'

import { FunctionalComponent } from '../types'
// ============================================================================

type Props = typeof defaultProps & { name: string }

const defaultProps = { greeting: 'Hello' }

// 1. Functional Component + defaultProps

const Greet = (({ greeting, name }: Props) => {
  return (
    <div>
      {greeting}, {name}
    </div>
  )
}) as FunctionalComponent<Props, typeof defaultProps>
Greet.defaultProps = defaultProps

// 2. Class Component + defaultProps

// class Greet extends Component<Props> {
//   static defaultProps = defaultProps
//   render() {
//     const { greeting, name } = this.props
//     return (
//       <div>
//         {greeting}, {name}
//       </div>
//     )
//   }
// }

// ============================================================================
export class Example extends Component {
  static title = 'React Intro'
  render() {
    const view = <Greet name="Venom !" greeting="We ARE" />
    return <>{view}</>
  }
}
