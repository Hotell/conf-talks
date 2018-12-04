import { createElement } from 'react'

import { RouteConfig } from '../../../lib/rr-ear'

import { Topic } from './topic'

export const routes: RouteConfig[] = [
  {
    path: '',
    component: () => createElement('p', {}, 'Please select a topic.')
  },
  {
    path: ':topicId',
    component: Topic
  }
]
