import { render } from 'react-dom'
import { createElement, FC } from 'react'

import './styles.css'
import { App } from './app/app'

const bootstrap = () => {
  const mountTo = document.querySelector('#root')
  // 1. WHY we need cast to `FC` ?
  // - otherwise we'll get error because of generalization of createElement definition overloads order

  // Error:
  // Argument of type 'FunctionComponentElement<DOMAttributes<never>>' is not assignable to parameter of type 'ReactElement<any>[]'.
  // Property 'length' is missing in type 'FunctionComponentElement<DOMAttributes<never>>'
  // render(createElement(App) , mountTo)

  render(createElement(App as FC) , mountTo)
}

bootstrap()
