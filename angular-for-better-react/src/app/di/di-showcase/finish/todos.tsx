import React, { Component, FormEvent, ChangeEvent, MouseEvent } from 'react'
import { withInjectables } from '@martin_hotell/rea-di'

import { Todo } from '../../todo.model'
import { Logger } from './logger.service'

type Props = {
  logger: Logger
}
type State = typeof initialState
const initialState = {
  fieldText: '',
  todos: [] as Todo[]
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
      target: { value }
    } = ev
    this.setState({ fieldText: value })
  }

  _handleClick = (ev: MouseEvent) => {
    this.clearAll()
  }

  addTodo(text: string) {
    const newTodo = new Todo(text)
    this.setState((prevState) => ({
      todos: [...prevState.todos, newTodo]
    }))

    this.props.logger.log(`Todo added ✅! ${JSON.stringify(newTodo)}`)
  }
  clearAll() {
    this.setState((prevState) => ({ todos: [] }))
    this.props.logger.warn('O ou! everything was just erased 🙀')
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
          {this.state.todos.map((todo) => (
            <li key={todo.id}>{todo.text}</li>
          ))}
        </ul>
      </div>
    )
  }
}

// 1. inject from parent component
export { Todos }

// 2. use HoC
// const EnhancedTodos = withInjectables({ logger: Logger })(Todos)

// export { EnhancedTodos as Todos }
