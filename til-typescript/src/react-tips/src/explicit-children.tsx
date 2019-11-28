const Section = (props: {
  title: React.ReactNode
  children: React.ReactNode
}) => {
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
      {/* 🚨EXPECT ERROR */}
      {/* <Section title="Hello!"></Section> */}

      <Section title="Hello!">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </Section>
    </div>
  )
}
