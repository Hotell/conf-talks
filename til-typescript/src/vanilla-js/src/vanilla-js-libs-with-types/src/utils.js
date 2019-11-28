// 1. LOOK MOM NOT TYPES !!!!

export const Logger = (enable = true) => {
  const log = (...args) => {
    enable && console.log(...args)
  }

  const warn = (...args) => {
    enable && console.warn(...args)
  }

  const error = (...args) => {
    enable && console.error(...args)
  }

  return {
    log,
    warn,
    error
  }
}
