import React, { Component, ReactChild } from 'react'

type Props = {
  children: (props: Counter['api']) => ReactChild
}
type State = typeof initialState
const initialState = { count: 0 }
export class Counter extends Component<Props, State> {
  state = initialState
  inc = () => this.setState(prevState => ({ count: prevState.count + 1 }))
  dec = () => this.setState(prevState => ({ count: prevState.count - 1 }))

  get api() {
    return {
      count: this.state.count,
      inc: this.inc,
      dec: this.dec,
    }
  }

  render() {
    return <>{this.props.children(this.api)}</>
  }
}
