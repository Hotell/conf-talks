import React, { Component } from 'react'

// ============================================================================
// 1. Functional Component + defaultProps

type Props = typeof defaultProps & { who: string }

const defaultProps = { greeting: 'Hello' }

const Greet = ({ greeting, who }: Props) => {
  return (
    <div>
      {greeting}, {who}
    </div>
  )
}
Greet.defaultProps = defaultProps

// ============================================================================
// 2. Class Component + defaultProps

{
  class Greet extends Component<Props> {
    static defaultProps = defaultProps
    render() {
      const { greeting, who } = this.props
      return (
        <div>
          {greeting}, {who}
        </div>
      )
    }
  }
}

// ============================================================================

export class Example extends Component {
  static title = 'React Intro'
  render() {
    const view = <Greet greeting="We ARE" who="Venom !" />
    return <>{view}</>
  }
}
