import { createElement } from 'react'
import { render } from 'react-dom'

import './styles.css'

import { App } from './app/app'

const bootstrap = () => {
  const mountTo = document.querySelector('#root')

  if (mountTo) {
    render(createElement(App), mountTo)
  }
}

bootstrap()
