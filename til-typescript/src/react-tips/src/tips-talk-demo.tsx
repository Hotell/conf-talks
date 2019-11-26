import React from 'react'

type Props = { title: React.ReactNode }

// 1. EXCUSE ME! who annotated children ?
// 2. proper prop types
// 3. explicit children (ReactNode)
// 4. ReactNode -> strict children
// 5. defaultProps -> JSX.LibraryManagedAttributes
const Section: React.FC<Props> = (props) => {
  return (
    <section>
      <header>{props.title}</header>
      <div>{props.children}</div>
    </section>
  )
}

export const App = () => {
  return (
    <div>
      <Section title="Hello!">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </Section>
    </div>
  )
}
