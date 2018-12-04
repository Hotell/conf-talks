import React from 'react'
import { RouteComponentProps } from 'react-router'

type Props = RouteComponentProps<{ topicId: string }>

export function Topic({ match }: Props) {
  return (
    <div>
      <h3>{match.params.topicId}</h3>
      <p>I was matched by :tacosID param booo</p>
    </div>
  )
}
