import React, { Component } from 'react'

type Props = {
  // greeting: string
  who: string
} & typeof defaultProps
const defaultProps = {
  greeting: 'Hello',
}

export class Greeter extends Component<Props> {
  static defaultProps = defaultProps
  render() {
    return (
      <h5>
        {this.props.greeting} {this.props.who}
      </h5>
    )
  }
}
