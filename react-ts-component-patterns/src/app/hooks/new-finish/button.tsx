import React, { ReactChild } from 'react'

// 1. Button
// Stateless

type Props = {
  children: ReactChild
  color?: ColorVariants
  onClick?: () => void
}

type ColorVariants = 'primary' | 'secondary' | 'success' | 'warning' | 'danger'

export const Button = ({ children, color, onClick }: Props) => {
  const cx = color && `btn-${color}`


  return (
      <button className={cx} onClick={onClick}>
        {children}
      </button>
    )
    return React.createElement('button', { className: cx, onClick }, children)
}
