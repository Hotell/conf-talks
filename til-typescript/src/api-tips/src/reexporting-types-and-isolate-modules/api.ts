// models.ts
export interface UserModel {
  firstName: string
  lastName: string
  email: string
  age: number
}

export const createUser = () => {}

export const formatUserName = (user: UserModel) => {}
