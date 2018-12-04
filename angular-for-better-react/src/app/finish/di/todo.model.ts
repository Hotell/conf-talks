export class Todo {
  id: string
  text: string
  constructor(text: string) {
    this.id = Date.now().toString()
    this.text = text
  }
}
