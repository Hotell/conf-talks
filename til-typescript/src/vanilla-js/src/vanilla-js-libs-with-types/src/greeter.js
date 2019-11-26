/**
 *
 * @param {string} greeting
 */
export const Greeter = (greeting) => {
  /**
   *
   * @param {string} who
   */
  const greet = (who) => {
    return `${greeting} ${who} !`
  }

  return { greet }
}
