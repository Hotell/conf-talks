// Let's say this is some standard API
// exporting runtime entities and compile time TOKENS
export interface UserModel {
  firstName: string
  lastName: string
  email: string
  age: number
}

export const createUser = () => {}

export const formatUserName = (user: UserModel) => {}
