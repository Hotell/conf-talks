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

const SectionGood = (props: {
  title: string
  children: [React.ReactChild, React.ReactChild]
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
    <>
      <div>
        {/* 🚨EXPECT ERROR */}
        {/* <Section title="Hello!"></Section> */}

        {/* <Section title={[]}> */}
        {/* <Section title={123}> */}
        {/* <Section title={null}> */}
        <Section title="Hello">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Section>
      </div>
      <div>
        {/* 🚨EXPECT ERROR */}
        {/* <SectionGood title={{}}> */}
        <SectionGood title="Hello">
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
        </SectionGood>
      </div>
    </>
  )
}
