export class Logger {
  constructor(enable) {
    this.enable = enable_
  }

  log(...args) {
    this._enable && console.log(...args)
  }
}
