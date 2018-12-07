import { lazy, createElement } from 'react'

import { RouteConfig } from '../../lib/rr-ear'

import Home from './home'
import NotFound from './not-found'
import About from './about'
// import { Topics } from './topics/topics'
// import { Topic } from './topics/topic'

export const routes: RouteConfig[] = [
  {
    path: '',
    component: Home
  },
  {
    path: 'about',
    component: About
  },
  {
    path: 'topics',
    component: lazy(() => import('./topics'))
  },
  // {
  //   path: 'topics',
  //   component: Topics,
  //   children: [
  //     {
  //       path: '',
  //       component: () => createElement('p', {}, 'Please select a topic.')
  //     },
  //     {
  //       path: ':topicId',
  //       component: Topic
  //     }
  //   ]
  // },
  {
    path: '**',
    component: NotFound
  }
]

// Lazy load routes:
// ================
// {
//   path: 'topics',
//   component: lazy(() => import('./topics')),
// },

// {
//   path: 'about',
//   component: lazy(() => import('./about')),
// },
