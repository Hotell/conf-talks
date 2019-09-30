import React, { useState } from 'react'

import './app.css'

export const App = () => {
  const [state, setState] = useState(0)

  /**
   * @param {React.ChangeEvent<HTMLInputElement>} ev
   */
  const handleChange = (ev) => {
    setState(Number(ev.target.value))
  }

  return (
    <section>
      <h1>Hello from React</h1>
      <label>React State:</label>
      <input
        className="app_input"
        type="number"
        value={state}
        onChange={handleChange}
      />
      <section>
        <h2>WC interop</h2>
        <wc-counter count={state}></wc-counter>
      </section>
    </section>
  )
}
