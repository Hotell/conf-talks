// re-exporting everything as we decided whole API is public!
export * from './api'

// ===============
// Let's be picky!
// ===============

// 🚨 EXPECT ERROR
// export { createUser, UserModel } from './api'
//
// -----
// babel
// ↓ ↓ ↓
// export { createUser, UserModel } from './api'
//
// api.ts
// ↓ ↓ ↓
// NO UserModel !!!
// export const createUser = () => {}
// export const formatUserName = (user) => {}

// ✅FIX (NOTE -> Beware Generics 👀)
// export type UserModel = import('./api').UserModel
// export { createUser } from './api'
