class Greeter extends HTMLElement {
  greet = ''
  who = ''
  constructor() {
    super()
  }
  connectedCallback() {
    this.innerHTML = `<h1>${this.greet} ${this.who}!</h1>`
  }
}
customElements.define('x-greeter', Greeter)

// 1. Extend JSX namespace
/* declare global {
  namespace JSX {
    interface IntrinsicElements {
      'x-greeter': Pick<Greeter, 'greet' | 'who'>
    }
  }
} */

export const App = () => {
  return (
    <div>
      {/* prettier-ignore */}
      {/* <x-greeter greet="Hello" who="World"></x-greeter> */}
    </div>
  )
}
