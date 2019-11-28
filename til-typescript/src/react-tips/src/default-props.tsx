import React from 'react'

const Greeter = (props: { who: string; greeting: string }) => {
  return (
    <h1>
      {props.greeting} {props.who}!
    </h1>
  )
}

/*
type ResolvedProps = JSX.LibraryManagedAttributes<
  typeof Greeter,
  React.ComponentProps<typeof Greeter>
>
*/
Greeter.defaultProps = {
  greeting: 'Hello'
}

// ========================

const defaultProps = {
  greeting: 'Hello'
}
const GreeterFinal = (
  props: { who: string } & Partial<typeof defaultProps>
) => {
  const { greeting, who } = { ...defaultProps, ...props }

  return (
    <h1>
      {greeting} {who}!
    </h1>
  )
}

export const App = () => {
  return (
    <div>
      <Greeter greeting="Hello" who="World" />
      <Greeter who="World" />
      {/* ======================================= */}

      <GreeterFinal greeting="Hello" who="World" />
      <GreeterFinal who="World" />
    </div>
  )
}
