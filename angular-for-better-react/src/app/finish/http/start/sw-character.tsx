import React, { Component, FormEvent, ChangeEvent } from 'react'
import { withInjectables } from '@martin_hotell/rea-di'

type Props = {}
type State = typeof initialState

const initialState = {
  charName: '',
  data: null as object | null,
  errors: null as object | null,
}
class SwCharacter extends Component<Props, State> {
  state = initialState

  _handleSubmit = (ev: FormEvent) => {
    ev.preventDefault()

    // this.props.swCharactersService
    //   .get(this.state.charName)
    //   .then(data => {
    //     this.setState({ data })
    //   })
    //   .catch(reason => this.setState({ errors: reason }))
  }

  _handleChange = (ev: ChangeEvent<HTMLInputElement>) => {
    this.setState({ charName: ev.target.value })
  }

  render() {
    const { data, errors } = this.state
    return (
      <>
        <form onSubmit={this._handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="input-block"
              value={this.state.charName}
              onChange={this._handleChange}
            />
          </div>
        </form>
        {data ? (
          <div>
            <h5>Character data</h5>
            <pre>{JSON.stringify(data, null, 2)}</pre>
          </div>
        ) : (
          'No data yet'
        )}
        {errors ? (
          <pre className="background-danger">
            <b>ERROR OCURRED:</b>
            {JSON.stringify(errors, null, 2)}
          </pre>
        ) : null}
      </>
    )
  }
}

export { SwCharacter }

// const EhnancedSwCharacter = withInjectables({
//   swCharactersService: SwCharactersService,
// })(SwCharacter)

// export { EhnancedSwCharacter as SwCharacter }
