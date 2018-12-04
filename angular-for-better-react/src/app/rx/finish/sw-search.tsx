import React, { Component, FormEvent, ChangeEvent } from 'react'
import { withInjectables } from '@martin_hotell/rea-di'
import { HttpClient } from '@martin_hotell/axios-http'
import { Subject, of, from, Observable } from 'rxjs'
import {
  debounceTime,
  switchMap,
  distinctUntilChanged,
  catchError,
  takeUntil
} from 'rxjs/operators'

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

  readonly searchTerm = new Subject<string>()
  readonly onUnmount = new Subject()

  handleChange = (ev: ChangeEvent<HTMLInputElement>) => {
    const { value: term } = ev.target

    this.searchTerm.next(term)
  }

  doSearch(term: string): Observable<People[]> {
    return from(
      this.props.httpClient
        .get<SWApiCollectionResponse<People>>('people', {
          params: { search: term }
        })
        .then((response) => response.data.results)
    )
  }

  readonly results$ = this.searchTerm.pipe(
    // prevent memory leaks
    takeUntil(this.onUnmount),

    // wait 300ms after each keystroke before considering the term
    debounceTime(500),

    // ignore new term if same as previous term
    distinctUntilChanged(),

    // switch to new search observable each time the term changes
    switchMap((term: string) => (term ? this.doSearch(term) : of([]))),

    // catch errors
    catchError((error) => {
      console.error(error)
      return of([])
    })
  )

  componentDidMount() {
    this.results$.subscribe((results) => {
      this.setState({ data: results })
    })
  }

  componentWillUnmount() {
    this.onUnmount.complete()
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
