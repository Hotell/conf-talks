import React, { Component, FormEvent, ChangeEvent, MouseEvent } from 'react'

import { TodoService } from './todo.service'

type Props = {
  todoService: TodoService
}
type State = typeof initialState
const initialState = {
  fieldText: '',
}
class Todos extends Component<Props, State> {
  state = initialState
  _handleSubmit = (ev: FormEvent) => {
    ev.preventDefault()

    this.props.todoService.addTodo(this.state.fieldText)

    this.setState({ fieldText: '' })
  }

  _handleChange = (ev: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = ev
    this.setState({ fieldText: value })
  }

  _handleClick = (ev: MouseEvent) => {
    this.props.todoService.clearAll()
  }

  render() {
    const { todos } = this.props.todoService.state
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
          {todos.map(todo => (
            <li key={todo.id}>{todo.text}</li>
          ))}
        </ul>
      </div>
    )
  }
}

export { Todos }
