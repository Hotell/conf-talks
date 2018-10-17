// import React from 'react'

// // import React, { Component, ReactNode } from 'react'

// // {
// //   type Props<T = { type: 'a' } | { type: 'button' }> = T extends {
// //     type: 'a'
// //   }
// //     ? { href: string } & T
// //     : { onClick: Function } & T

// //   class Test extends Component<Props> {
// //     static readonly defaultProps = {
// //       type: 'a'
// //     }
// //   }

// //   // should error (missing 'href'), got other error (missing 'onClick')
// //   ;<Test />
// // }

// // {
// //   type UnionProps =
// //     | {
// //         type: 'a'
// //         href: string
// //       }
// //     | {
// //         type: 'button'
// //       }

// //   type Props<T> = T extends {
// //     type: 'a'
// //   }
// //     ? { href: string } & T
// //     : T

// //   class Test extends Component<UnionProps> {
// //     // static defaultProps = {
// //     //   type: 'a' as 'a'
// //     // }
// //   }

// //   // should error (missing 'href'), got none
// //   ;<Test />
// //   // should not error, got none
// //   ;<Test type="button" href="foo" />
// //   // should error (incorrect type for 'href'), got none
// //   ;<Test type="a" href={'asdas'} />
// //   // should error (missing 'href'), got error
// //   ;<Test type="a" />
// //   // should not error, got none
// //   ;<Test type="a" href="foo" />
// //   // should not error, got none
// //   ;<Test type="button" />
// // }

// type Props = {
//   onClick: (ev: import('react').MouseEvent<HTMLElement>) => void
//   children: import('react').ReactChild
// } & typeof defaultProps

// const defaultProps = Object.freeze({ color: 'red' })

// function Button({ onClick: handleClick, color, children }: Props) {
//   return (
//     <button style={{ color }} onClick={handleClick}>
//       {children}
//     </button>
//   )
// }
// Button.defaultProps = defaultProps
// Button.propTypes = {
//   color: 'string'
// }

// const handleClick = () => console.log('clicked')
// const color = 'red'

// export const Example = () => (
//   <>
//     <Button onClick={handleClick}>Click me</Button>
//   </>
// )

// function foo() {}
// foo.defaultProps = 'abc'

// // expecting 'string' here
// type DefaultPropsOfFoo = typeof foo extends { defaultProps: infer D }
//   ? D
//   : never

// type DefaultPropsOfButton = typeof Button extends { defaultProps: infer D }
//   ? D
//   : never
