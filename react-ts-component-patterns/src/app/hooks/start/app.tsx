import React from 'react'

import { DemoWrapper } from '../../demo-wrapper'

import { Example as E1 } from './01'
import { Example as E2 } from './02'
import { Example as E3 } from './03'
import { Example as E4 } from './04'
import { Example as E5 } from './05'
import { Example as E7 } from './07'

export const LiveApp = () => <DemoWrapper demos={[E1, E2, E3, E4, E5, E7]} />
