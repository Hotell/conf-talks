import { HttpClient } from './http-client.service'
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
