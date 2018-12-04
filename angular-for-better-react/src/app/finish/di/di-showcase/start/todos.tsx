import React, { Component, FormEvent, ChangeEvent, MouseEvent } from 'react'
import { Todo } from '../../todo.model'

type Props = {}
type State = typeof initialState
const initialState = {
  fieldText: '',
  todos: [] as Todo[],
}
class Todos extends Component<Props, State> {
  state = initialState
  _handleSubmit = (ev: FormEvent) => {
    ev.preventDefault()

    this.addTodo(this.state.fieldText)

    this.setState({ fieldText: '' })
  }

  _handleChange = (ev: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = ev
    this.setState({ fieldText: value })
  }

  _handleClick = (ev: MouseEvent) => {
    this.clearAll()
  }

  addTodo(text: string) {
    this.setState(prevState => ({
      todos: [...prevState.todos, new Todo(text)],
    }))
  }
  clearAll() {
    this.setState(prevState => ({ todos: [] }))
  }

  render() {
    return (
      <div>
        <form onSubmit={this._handleSubmit}>
          <div className="form-group">
            <input
              className="input-block"
              type="text"
              value={this.state.fieldText}
              onChange={this._handleChange}
            />
          </div>
        </form>
        <button className="btn-block btn-danger" onClick={this._handleClick}>
          clear
        </button>
        <ul>
          {this.state.todos.map(todo => (
            <li key={todo.id}>{todo.text}</li>
          ))}
        </ul>
      </div>
    )
  }
}

export { Todos }
