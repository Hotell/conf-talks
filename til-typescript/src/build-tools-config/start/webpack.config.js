const root = path.resolve(__dirname)

module.export = (env) => {
  const config = {
    entry: path.resolve(root, './app/main.js'),
    output: {
      filname: 'main.js',
      path: path.resolve(root, 'dist')
    },
    mode: env,
    got: '#yourWatchHasEnded'
  }

  return config
}
