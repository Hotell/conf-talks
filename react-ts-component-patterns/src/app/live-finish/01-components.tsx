import React, { Component } from 'react'
// ============================================================================

type Props = Partial<typeof defaultProps> & { name: string }
const defaultProps = { greeting: 'Hello' }

// const Greet = ({greeting = defaultProps.greeting, name}: Props) => <div>{greeting}, {name}</div>

class Greet extends Component<Props> {
  static defaultProps = defaultProps
  render() {
    const { greeting, name } = this.props
    return (
      <div>
        {greeting}, {name}
      </div>
    )
  }
}

// ============================================================================
export class Example extends Component {
  static title = 'React Intro'
  render() {
    const view = <Greet name="Venom !" greeting="We ARE" />
    return <>{view}</>
  }
}
