import { render } from 'react-dom'
import { createElement } from 'react'

import './styles.css'
import { App } from './app/app'

const bootstrap = () => {
  const mountTo = document.querySelector('#root')
  render(createElement(App), mountTo)
}

bootstrap()
