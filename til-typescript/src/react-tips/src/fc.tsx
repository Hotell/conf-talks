import React from 'react'

type Props = { title: React.ReactNode }

const Section: React.FC<Props> = (props) => {
  return (
    <section>
      <header>{props.title}</header>
      <div>{props.children}</div>
    </section>
  )
}

/* const SectionOk = (props:Props) => {
  return (
    <section>
      <header>{props.title}</header>
      <div>{props.children}</div>
    </section>
  )
} */

export const App = () => {
  return (
    <div>
      <Section title="Hello!">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </Section>
    </div>
  )
}
