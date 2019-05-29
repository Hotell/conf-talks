// @ts-check
export class Logger {
  /**
   * @param {boolean} enable
   */
  constructor(enable) {
    this._enable = enable
  }

  /**
   * @param {unknown[]} args
   */
  log(...args) {
    this._enable && console.log(...args)
  }
}
