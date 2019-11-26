// @ts-check

const path = require('path')
const root = path.resolve(__dirname)

/**
 * @param {'development'} env
 */
module.exports = (env) => {
  /** @type {import('webpack').Configuration} */
  const config = {
    entry: path.resolve(root, './src/main.js'),
    output: {
      filename: 'main.js',
      path: path.resolve(root, 'dist')
    },
    mode: env
  }

  return config
}
