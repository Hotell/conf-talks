import React, { Component, createElement } from 'react'

type Props = { greeting: string; name: string }

// const Greeter = ({ greeting, name }: Props) => (
//   <h2>
//     {greeting}, {name}
//   </h2>
// )

class Greeter extends Component<Props> {
  render() {
    const { greeting, name } = this.props
    return (
      <h2>
        {greeting}, {name}
      </h2>
    )
  }
}

const greeting = 'Hello'
const name = 'Geecon !'

// export const Example = () => Greeter({ greeting, name })
// export const Example = () => createElement(Greeter, { greeting, name })
// export const Example = () => <Greeter greeting={greeting} name={name} />
export const Example = () => <Greeter {...{ greeting, name }} />
