import React, { createElement } from 'react'

// ============================================================================
// 1. Functional Component + defaultProps

type Props = typeof defaultProps & { who: string }

const defaultProps = { greeting: 'Hello' }

// const Greet = ({ greeting, who }: Props) => {
//   return createElement('div', null, `${greeting}, ${who}`)
// }
const Greet = ({ greeting, who }: Props) => {
  return (
    <div>
      {greeting}, {who}
    </div>
  )
}
Greet.defaultProps = defaultProps


// ============================================================================

export const Example = () => {
  // const view = Greet({ greeting: 'we ARE', who: 'Venom!' })
  const view = <Greet greeting="We ARE" who="Venom !" />
  return view
}
Example.title = 'React Intro'