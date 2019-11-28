// 1. run webpack -> yarn w:js:webpack
// 2. add type checking
// 3. fix webpack

const root = path.resolve(__dirname)

module.export = (env) => {
  const config = {
    entry: path.resolve(root, './src/main.js'),
    output: {
      filname: 'main.js',
      path: path.resolve(root, 'dist')
    },
    mode: env,
    got: '#yourWatchHasEnded'
  }

  return config
}

// CORRECT VERSION

// // @ts-check

// const path = require('path')
// const root = path.resolve(__dirname)

// /**
//  * @param {'development'} env
//  */
// module.exports = (env) => {
//   /** @type {import('webpack').Configuration} */
//   const config = {
//     entry: path.resolve(root, './src/main.js'),
//     output: {
//       filename: 'main.js',
//       path: path.resolve(root, 'dist')
//     },
//     mode: env
//   }

//   return config
// }
