### api.service.ts

```ts
import axios, { AxiosInstance, AxiosError } from 'axios'

export class HttpClient {
  private provider: AxiosInstance
  constructor(baseURL: string) {
    this.provider = axios.create({ baseURL })
  }

  get<T>(url: string) {
    return this.provider
      .get<T>(url)
      .then((response) => response.data)
      .catch((reason: AxiosError) => {
        const error = reason.response ? reason.response.data : reason.response

        throw error
      })
  }
}
```

### user.service.ts

```ts
import { HttpClient } from './api.service'
import { GithubUser, GithubUserRepo } from './models'

export class UserService {
  constructor(private httpClient: HttpClient) {}

  getUser(username: string) {
    return this.httpClient.get<GithubUser>(`users/${username}`)
  }

  getRepos(username: string) {
    return this.httpClient.get<GithubUserRepo[]>(`users/${username}/repos`)
  }

  getProfile(username: string) {
    return Promise.all([this.getUser(username), this.getRepos(username)]).then(([bio, repos]) => {
      return { bio, repos }
    })
  }
}
```
