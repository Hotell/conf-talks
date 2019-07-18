- implement Stateless button with click behavior and customizable color
- showcase that under the hood it's all just function calls

```tsx
import React, { ReactChild } from 'react'

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
}
```

```tsx
return React.createElement('button', { className: cx, onClick }, children)
```
