import React from 'react'

import { DemoWrapper } from '../../demo-wrapper'

import { Example as E1 } from './01-components'
import { Example as E2 } from './02-stateless-stateful'
import { Example as E3 } from './03-controlled-uncontrolled'
import { Example as E4 } from './04-render-prop'
import { Example as E5 } from './05-hoc'
import { Example as E6 } from './07-hooks'

export const LiveApp = () => <DemoWrapper demos={[E1, E2, E3, E4, E5, E6]} />
