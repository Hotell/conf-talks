import React, { Component, FormEvent, ChangeEvent } from 'react'
import { withInjectables } from '@martin_hotell/rea-di'
import { HttpClient } from '@martin_hotell/axios-http'
import { from, Observable } from 'rxjs'

import { People, SWApiCollectionResponse } from '../../models'

type Props = {
  httpClient: HttpClient
}
type State = typeof initialState

const initialState = {
  data: null as People[] | null
}
class SwSearch extends Component<Props, State> {
  state = initialState

  // 0. call this.doSearch(term) within handleChange

  // 1. searchTerm Subject -> handleChange

  // 2. results$ on searchTem && wrap doSearch with Observable

  // 3. subscribe on didMount and update state

  handleChange = (ev: ChangeEvent<HTMLInputElement>) => {
    const { value: term } = ev.target

    console.warn(
      'WARNING, if you call http here, you may crash your browser 💥',
      term
    )
  }

  doSearch(term: string): Promise<People[]> {
    return this.props.httpClient
      .get<SWApiCollectionResponse<People>>('people', {
        params: { search: term }
      })
      .then((response) => response.data.results)
  }

  render() {
    const { data } = this.state
    return (
      <>
        <section>
          <h5>SW Search</h5>
          <div className="form-group">
            <input
              placeholder="start typing..."
              type="text"
              className="input-block"
              onChange={this.handleChange}
            />
          </div>
          {data ? (
            <ul>
              {data.map((item) => (
                <li key={item.url}>{item.name}</li>
              ))}
            </ul>
          ) : null}
        </section>
      </>
    )
  }
}

const EhnancedSwSearch = withInjectables({ httpClient: HttpClient })(SwSearch)
export { EhnancedSwSearch as SwSearch }
