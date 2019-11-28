import React from 'react'
import { greet } from 'greeter'

const main = () => {
  if (process.env.NODE_ENV == 'development') {
    console.log(greet('World', 'Hello'))

    console.log(React.reLog('gnuuuu'))
  }
}
