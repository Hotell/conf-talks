import { Stateful } from '@martin_hotell/rea-di'
import { Injectable } from 'injection-js'

import { Todo } from '../../todo.model'
import { Logger } from '../../logger.service'

type State = typeof initialState
const initialState = {
  todos: [] as Todo[],
}

@Injectable()
export class TodoService extends Stateful<State> {
  readonly state = initialState

  constructor(private logger: Logger) {
    super()
  }

  addTodo(text: string) {
    const newTodo = new Todo(text)
    this.setState(prevState => ({
      todos: [...prevState.todos, newTodo],
    }))

    this.logger.log(`Todo added ✅! ${JSON.stringify(newTodo)}`)
  }

  clearAll() {
    this.setState(prevState => ({ todos: [] }))
    this.logger.warn('O ou! everything was just erased 🙀')
  }
}
