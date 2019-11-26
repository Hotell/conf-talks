export const Logger = (enable = true) => {
  /**
   * @param  {...any} args
   */
  const log = (...args) => {
    enable && console.log(...args)
  }
  /**
   * @param  {...any} args
   */
  const warn = (...args) => {
    enable && console.warn(...args)
  }
  /**
   * @param  {...any} args
   */
  const error = (...args) => {
    enable && console.error(...args)
  }

  return {
    log,
    warn,
    error
  }
}
