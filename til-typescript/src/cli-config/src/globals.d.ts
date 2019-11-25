declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production'
    }
  }
}

export {}

// VS

// declare namespace NodeJS {
//   interface ProcessEnv {
//     NODE_ENV: 'development' | 'production'
//   }
// }
