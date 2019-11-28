import { createHash } from './utils'

export const createTodoListManager = (initialState: Todo[]) => {
  let todos: Todo[] = [...initialState]

  const addTodo = (title: string) => {
    todos = [...todos, createTodo(title)]

    return todos
  }

  const removeTodo = (todo: Todo) => {
    todos = todos.filter((item) => item.id != todo.id)

    return todos
  }

  const toggleComplete = (todo: Todo) => {
    todos = todos.map((item) => {
      if (item.id === todo.id) {
        return { ...item, completed: !item.completed }
      }

      return item
    })

    return todos
  }

  const updateTodo = (todo: Todo, title: string) => {
    todos = todos.map((item) => {
      if (item.id === todo.id) {
        return { ...item, title }
      }

      return item
    })

    return todos
  }

  const getTodos = () => {
    return Object.freeze(todos)
  }
  const getTodo = (idx: number) => {
    return Object.freeze(todos[idx])
  }

  return {
    getTodos,
    getTodo,
    addTodo,
    removeTodo,
    toggleComplete,
    updateTodo
  }
}

type Todo = ReturnType<typeof createTodo>

export const createTodo = (title: string) => {
  return {
    id: createHash(),
    completed: false,
    title
  }
}
