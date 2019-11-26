const commonApproach = () => {
  interface Todo {
    id: string
    completed: boolean
    title: string
  }

  const Todo = (title: string): Todo => {
    return {
      id: Date.now().toString(),
      completed: false,
      title
    }
  }
}

// Better Approach !
// - Runtime is source of truth
// - provide same tokens via declaration merging

export const Todo = (title: string) => {
  return {
    id: Date.now().toString(),
    completed: false,
    title
  }
}

export type Todo = ReturnType<typeof Todo>
