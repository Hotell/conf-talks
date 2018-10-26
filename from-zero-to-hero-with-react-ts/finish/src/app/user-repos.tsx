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
