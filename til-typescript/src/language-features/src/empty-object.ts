export const main = () => {
  const emptyObject = () => {
    let emptyObj: {} = {}

    // BETTER 1
    // let emptyObj: object = {}

    // BETTER 2
    // let emptyObj: Record<string, string> = {}

    // BETTER 3a
    // let emptyObj = {} as { who: string }
    // BETTER 3b
    // let emptyObj: { who?: string } = {}

    const test = () => {
      // 1. null & undefined
      emptyObj = null
      emptyObj = undefined

      // 2. primitive values
      emptyObj = 'who let the dogs out'
      emptyObj = 123
      emptyObj = false

      // 3. JavaScript Object
      emptyObj = () => {}
      emptyObj = { que: 'passa' }
      emptyObj = ['hello']

      // 4. exact dictionary shape
      emptyObj = { who: 'me' }
      emptyObj.what = 'conf talk'
      emptyObj.who = 'me dude'
    }
  }

  const emptyArray = () => {
    const emptyArr = [] as []

    emptyArr.push('dfdfs')
    emptyArr.push(() => {})
    emptyArr.push(1231)
    emptyArr.push(null)
    emptyArr.push(undefined)
    emptyArr.push(['hello'])
    emptyArr.push({ who: 'me' })
  }
}
