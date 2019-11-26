const Section: React.FC<{ title: React.ReactNode }> = (props) => {
  return (
    <section>
      <header>{props.title}</header>
      <div>{props.children}</div>
    </section>
  )
}

// Section.defaultProps = {
//   title: 'Hello'
// }

export const App = () => {
  return (
    <div>
      <Section title="Hello!">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </Section>
    </div>
  )
}
