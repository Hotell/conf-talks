# V2

## Agenda:

1.  What is React
2.  What is TypeScript
3.  What are we gonna build ( explain architecture )
4.  Hands down, chin up!
5.  Recap and finish him!

## Architecture

![app tree](./App-tree.jpg)

## Code session

## Phase 1

1.  start from scratch

`yarn init -y`

2.  install dependencies

```sh
yarn add react{,-dom} @types/react{,-dom}

yarn add -D typescript parcel-bundler
```

3.  initialize TypeScript

`yarn tsc --init`

And tweak config

4.  initialize code structure

```sh
mkdir src && touch src/{index.html,main.ts,styles.css}
```

**index.html**

```html

```

**main.ts**

```ts
const bootstrap = () => {
  const mountTo = document.getElementById('root') as HTMLDivElement
  const app = document.createElement('div')
  app.innerHTML = 'IT WORKS !!!'

  mountTo.appendChild(app)
}

bootstrap()
```

5.  setup Tasks via npm scripts

```json
{
  "scripts": {
    "start": "parcel src/index.html"
  }
}
```

`yarn start`

- BEHOLD IT WORKS!
- BEHOLD HOT MODULE REPLACEMENT!

6.  add papercss

`yarn add papercss`

**main.ts**

```ts
import 'papercss/dist/paper.css'

const bootstrap = () => {
  const mountTo = document.getElementById('app') as HTMLDivElement
  const app = document.createElement('div')
  app.innerHTML = 'IT WORKS !!!'
  app.className = 'container'

  mountTo.appendChild(app)
}

bootstrap()
```

## Phase 2 - React

1.  Create root component and render it to DOM

```sh
mkdir src/app &&
touch src/app/app.tsx
```

**app.tsx**

```tsx
import React, { Component } from 'react'

export class App extends Component {
  render() {
    return <div className="container">It Works !!!</div>
  }
}
```

2.  mount React tree

**main.ts**

```tsx
import 'papercss/dist/paper.css'

import { render } from 'react-dom'
import { createElement } from 'react'

import { App } from './app/app'

const bootstrap = () => {
  const mountTo = document.getElementById('app') as HTMLDivElement
  render(createElement(App), mountTo)
}

bootstrap()
```

3.  Explain what just happened

## Phase 3 - Build the app

### Phase 3.1 - Build search component

`touch src/app/search.tsx`

1.  build initial Search

```tsx
import React, { Component, ChangeEvent, FormEvent } from 'react'

const initialState = { search: '' }
type State = Readonly<typeof initialState>
type Props = {}
export class Search extends Component<Props, State> {
  readonly state = initialState

  private handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ search: event.target.value })
  }

  private handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log(this.state)
  }

  render() {
    const { search } = this.state

    return (
      <form className="paper" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <input
            type="search"
            placeholder="Search..."
            className="input-block"
            value={search}
            onChange={this.handleChange}
          />
        </div>
      </form>
    )
  }
}
```

2.  define props and clean state on submit

```tsx
type Props = {
  onSearch: (username: string) => void
}

class Search {
  private handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log('SUBMITTING!')

    this.props.onSearch(this.state.search)
    this.setState(initialState)
  }
}
```

Explain what happened

### Phase 3.2 - Build initial Profile component

`touch src/app/profile.tsx`

1.  initial implementation

```tsx
import React, { Component } from 'react'

import { GithubUser, GithubUserRepo } from './models'

type Props = {
  data: { bio: GithubUser; repos: GithubUserRepo[] }
}
export class Profile extends Component<Props> {
  render() {
    const { bio, repos } = this.props.data
    return (
      <div className="row">
        <div className="col sm-12 md-6">
          Todo...
          <pre>{JSON.stringify(bio, null, 2)}</pre>
        </div>
        <div className="col sm-12 md-6">
          Todo...
          <pre>{JSON.stringify(repos, null, 2)}</pre>
        </div>
      </div>
    )
  }
}
```

2.  update app.tsx

```tsx
class App {
  render() {
    return (
      <div className="container margin">
        <h1>Github Users search</h1>
        <Search onSearch={console.log} />
        <Profile data={{ bio: {} as any, repos: {} as any }} />
      </div>
    )
  }
}
```

3.  build generic Debug component to encapsulate JSON.stringify

**debug.tsx**

```tsx
import React from 'react'

type Props<T> = { data: T }
export const Debug = <T extends {}>(props: Props<T>) => (
  <pre>{JSON.stringify(props.data, null, 2)}</pre>
)
```

### Phase 3.3 - Fetch real data from App

1.  install Axios and create api.service

`yarn add axios`

**api.service.ts**

2.  create httpClient instance and implement `fetchUser` method

**app.tsx**

```tsx
import { HttpClient } from './api.service'

const httpClient = new HttpClient('https://api.github.com')

type Data = {
  bio: GithubUser
  repos: GithubUserRepo[]
}

const initialState = {
  data: null as Data | null,
  loading: false,
  error: null as object | null
}
type State = Readonly<typeof initialState>
type Props = {}

export class App extends Component<Props, State> {
  readonly state = initialState
  private fetchUser = (username: string) => {
    this.setState({ loading: true, error: null })

    const userData = httpClient.get<GithubUser>(`users/${username}`)
    const userRepos = httpClient.get<GithubUserRepo[]>(`users/${username}/repos`)

    const result = Promise.all([userData, userRepos]).then(([bio, repos]) => {
      return { bio, repos }
    })

    result
      .then((data) => {
        this.setState({ data, loading: false })
      })
      .catch((reason) => {
        console.log({ reason })
        this.setState({ loading: false, error: reason, data: null })
      })
  }
}
```

3.  update render to leverage state data and if/else conditional logic

**app.tsx**

```tsx
class App {
  render() {
    const { data, loading, error } = this.state

    return (
      <div className="container margin">
        <h1>Github Users search</h1>
        <Search onSearch={this.fetchUser} />
        {loading ? <p>Loading user...</p> : null}
        {error ? (
          <p className="text-error">
            Oh no panic! <Debug data={error} />
          </p>
        ) : null}
        {data ? <Profile data={data} /> : null}
      </div>
    )
  }
}
```

### Phase 3.4 - implement UserProfile component

`touch src/app/user-profile.tsx`

1.  implement

```tsx
import React, { Component } from 'react'

import { GithubUser } from './models'

type Props = { bio: GithubUser }
export class UserProfile extends Component<Props> {
  render() {
    const { bio } = this.props

    return (
      <div>
        {bio.avatar_url && <img src={bio.avatar_url} className="img-rounded img-responsive" />}

        <ul>
          {bio.name && <li>Name: {bio.name}</li>}
          {bio.login && <li>Username: {bio.login}</li>}
          {bio.email && <li>Email: {bio.email}</li>}
          {bio.location && <li>Location: {bio.location}</li>}
          {bio.company && <li>Company: {bio.company}</li>}
          {bio.followers && <li>Followers: {bio.followers}</li>}
          {bio.following && <li>Following: {bio.following}</li>}
          {bio.public_repos && <li>Public Repos: {bio.public_repos}</li>}
          {bio.blog && (
            <li>
              Blog: <a href={bio.blog}> {bio.blog}</a>
            </li>
          )}
        </ul>
      </div>
    )
  }
}
```

### Phase 3.5 - implement UserRepos component

`touch src/app/user-repos.tsx`

1.  explain list rendering via `.map`

```tsx
import React, { Component } from 'react'

import { GithubUserRepo } from './models'

type Props = { repos: GithubUserRepo[] }
export class UserRepos extends Component<Props> {
  render() {
    const { repos } = this.props

    return (
      <div>
        <h3 className="text-secondary">Repos</h3>
        <section className="row">
          {repos.map((repo) => (
            <div key={repo.name} className="col sm-12 margin-bottom-large card">
              <div className="card-body">
                {repo.html_url && (
                  <h4 className="card-title">
                    <a href={repo.html_url}>{repo.name}</a>
                  </h4>
                )}
                {repo.description && <p className="card-text">{repo.description}</p>}
              </div>
            </div>
          ))}
        </section>
      </div>
    )
  }
}
```

### Phase 3.6 - Refactor httpClient outside the component and implement userService

1.  extract httpClient to props

2.  create UserService and pass it to App via props

**user.service.ts**

**main.ts**

```ts
const bootstrap = () => {
  const mountTo = document.getElementById('app') as HTMLDivElement

  const httpClient = new HttpClient('https://api.github.com')
  const userService = new UserService(httpClient)

  render(createElement(App, { userService }), mountTo)
}
```

**app.tsx**

```tsx
const initialState = {
  data: null as Data,
  loading: false,
  error: null as object | null
}
type State = Readonly<typeof initialState>
type Props = { userService: UserService }

export class App extends Component<Props, State> {
  readonly state = initialState
  private fetchUser = (username: string) => {
    const { userService } = this.props

    this.setState({ ...initialState, loading: true })

    userService
      .getProfile(username)
      .then((data) => {
        this.setState({ data, loading: false })
      })
      .catch((reason) => {
        console.log({ reason })
        this.setState({ loading: false, error: reason, data: null })
      })
  }
}
```

### Phase 4 - Introducing Provider pattern ( DI and context)

### Phase 5 - Unit testing our app

### Phase 6 - E2E testing our app
