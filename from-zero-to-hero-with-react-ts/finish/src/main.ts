import './styles.css'

import { render } from 'react-dom'
import { createElement } from 'react'

import { App } from './app/app'
import { HttpClient } from './app/http-client.service'
import { UserService } from './app/user.service'

const bootstrap = () => {
  const mountTo = document.getElementById('root') as HTMLDivElement

  const httpClient = new HttpClient('https://api.github.com')
  const userService = new UserService(httpClient)

  render(createElement(App, { userService }), mountTo)
}

bootstrap()
