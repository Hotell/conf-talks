import { registerElement } from './web-components/finish/counter.component'
// import './web-components/start/counter.component'

import { bootstrapReactApp } from './app/bootstrap'

const bootstrap = () => {
  // 🚨comment out before start:
  // ===========================
  registerElement()
  bootstrapReactApp()
}

bootstrap()
