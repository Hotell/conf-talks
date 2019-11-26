/** @type {import('@babel/core').TransformOptions} */
const defaultBabelConfig = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        }
      }
    ],
    '@babel/preset-typescript'
  ]
}

require('@babel/register')({
  ...defaultBabelConfig,
  extensions: ['.jsx', '.js', '.ts', '.tsx']
})

module.exports = require('./module')
