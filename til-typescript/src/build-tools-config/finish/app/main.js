// @ts-check

import { Logger } from './logger'
import { IS_DEV } from './environment'
import { greet } from './greeter'

const main = () => {
  const logger = new Logger(IS_DEV)

  logger.log(greet('Hello', 'ngParty people'))
}

main()
