import { createElement } from 'react'
import { render } from 'react-dom'

import { App } from './app'

export const bootstrapReactApp = () => {
  const mountTo = document.querySelector('#root')
  if (mountTo) {
    render(createElement(App), mountTo)
    return
  }

  throw new Error('mount point not found!')
}
