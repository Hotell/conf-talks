import React, { Component } from 'react'

type Props = {
  color?: string
  who: string
} & typeof defaultProps
const defaultProps = {
  greeting: 'Hello'
}

export class Greeter extends Component<Props> {
  static defaultProps = defaultProps
  render() {
    return (
      <h5 style={{ color: this.props.color }}>
        {this.props.greeting} {this.props.who} !
      </h5>
    )
  }
}
