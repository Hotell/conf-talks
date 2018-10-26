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
    console.log('SUBMITTING!')

    this.props.onSearch(this.state.search)
    this.setState(initialState)
  }

  render() {
    const { search } = this.state

    return (
      <form
        data-test-id="search"
        className="paper"
        onSubmit={this.handleSubmit}
      >
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
