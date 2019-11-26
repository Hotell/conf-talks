import { Todo } from './model'

export const main = () => {
  const newTodo = Todo('Learn TypesScript')

  const root = document.getElementById('root')
  if (root) {
    root.innerHTML = TodosList([newTodo])
  }
}

const TodosList = (todos: Todo[]) => {
  return todos.map((item) => `<li>${item.title}</li>`).join('')
}
