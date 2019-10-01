// import './web-components/start/counter.component'

//🚨 remove following before start:

import { registerElement } from './web-components/finish/counter.component'
import { bootstrapReactApp } from './app/bootstrap'

const bootstrap = () => {
  registerElement()
  bootstrapReactApp()
}

bootstrap()
