import React, { useState } from 'react'

import './app.css'

export const App = () => {
  const [state, setState] = useState(0)

  const handleClick = () => {
    setState((prev) => prev + 1)
  }

  return (
    <section>
      <h1>Hello from React</h1>
      <div>
        <button onClick={handleClick}>Inc React State</button>
        <div>{state}</div>
      </div>
      <section className="app_interop">
        <h2>WC interop</h2>
        <wc-counter count={state}></wc-counter>
      </section>
    </section>
  )
}
