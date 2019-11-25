import * as m from 'react'

declare module 'react' {
  const reLog: (...args: unknown[]) => void
}
