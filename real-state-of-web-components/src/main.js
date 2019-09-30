import { registerElement } from './web-components/finish/counter.component'

import { bootstrapReactApp } from './app/bootstrap'

const bootstrap = () => {
  registerElement()

  bootstrapReactApp()
}

bootstrap()
