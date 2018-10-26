import React from 'react'

type Props<T> = { data: T }
export const Debug = <T extends {}>(props: Props<T>) => (
  <pre>{JSON.stringify(props.data, null, 2)}</pre>
)
