1. boot

```sh
npx create-nx-workspace
```

1. answer questions

```
? Workspace name (e.g., org name)     myorg
? What to create in the new workspace react
? Application name                    skate-shop
? Default stylesheet format           CSS
```

1. run app

```
yarn nx run todos-app:serve
```

1. run e2e

```
yarn nx run todos-app-e2e:e2e --watch
```

1. create library

```
yarn nx g @nrwl/react:lib ui-header
```

```tsx
import { ReactComponent as Logo } from './logo.svg'

import './ui-header.module.css'

/* eslint-disable-next-line */
export interface UiHeaderProps {
  title: string
}

export function UiHeader(props: UiHeaderProps) {
  return (
    <header className="flex">
      <Logo width="75" height="75" />
      <h1>Welcome to {props.title}!</h1>
    </header>
  )
}
```

- copy css

```css
.container {
  background-color: #143055;
  color: white;
  padding: 5px;
  border-radius: 3px;
}
```

1. use library in app

```tsx
import { UiHeader } from '@my-org/ui-header'
//
export function App() {
  return (
    <main>
      <UiHeader title="skate-shop" />
    </main>
  )
}
```

1. create app

```
yarn nx g @nrwl/react:app todos-app
```

1. use our ui-header in `todos-app`

```tsx
import { UiHeader } from '@my-org/ui-header'
//
export function App() {
  return (
    <main>
      <UiHeader title="todos" />
    </main>
  )
}
```

1. create storybook for `ui-header`

```sh
// install
yarn add -D @nrwl/storybook
```

```sh
yarn nx g @nrwl/react:storybook-configuration --name=ui-header
```

1. run storybook

```
yarn nx run ui-header:storybook
```

1. show dep graph

1. ci - affected

1.1. commit

1.1. do change

1.1. nx affected
1.1. nx graph affected
