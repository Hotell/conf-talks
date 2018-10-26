### app.tsx

> initial

```tsx
import React, { Component } from 'react'

import { GithubUser, GithubUserRepo } from './models'

type Data = {
  bio: GithubUser
  repos: GithubUserRepo[]
}

type State = typeof initialState

const initialState = {
  data: null as Data | null,
  loading: false
}

export class App extends Component {
  render() {
    const { data, loading } = this.state

    return (
      <div className="container">
        <h1>Github Users search</h1>
      </div>
    )
  }
}
```

### search.tsx

```tsx
import React, { Component, ChangeEvent, FormEvent } from 'react'

type State = Readonly<typeof initialState>
type Props = {
  onSearch: (username: string) => void
}

const initialState = { search: '' }

export class Search extends Component<Props, State> {
  readonly state = initialState

  private handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ search: event.target.value })
  }

  private handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    this.props.onSearch(this.state.search)
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

### profile.tsx

> initial

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

### user-profile.tsx

```tsx
import React, { Component } from 'react'

import { GithubUser } from './models'

type Props = { bio: GithubUser }

export class UserProfile extends Component<Props> {
  render() {
    const { bio } = this.props

    return (
      <div>
        {bio.avatar_url && (
          <img src={bio.avatar_url} className="img-rounded img-responsive" />
        )}

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

### user-repos.tsx

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
                {repo.description && (
                  <p className="card-text">{repo.description}</p>
                )}
              </div>
            </div>
          ))}
        </section>
      </div>
    )
  }
}
```

## debug.tsx

```tsx
import React from 'react'

type Props<T> = { data: T }
export const Debug = <T extends {}>(props: Props<T>) => (
  <pre>{JSON.stringify(props.data, null, 2)}</pre>
)
```
