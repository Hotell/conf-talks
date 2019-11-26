export const Todo = (title: string) => {
  return {
    id: Date.now().toString(),
    completed: false,
    title
  }
}

export type Todo = ReturnType<typeof Todo>
