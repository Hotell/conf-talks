export const main = () => {
  const emptyObject = () => {
    // ❌
    let emptyObj = {}

    // BETTER 1
    // let emptyObj: object = {}

    // BETTER 2
    // let emptyObj: Record<string, string> = {}

    // BETTER 3 - WONT WORK
    // let emptyObj: {who:string} = {}
    // BETTER 3
    // let emptyObj = {} as { who: string }

    const test = () => {
      emptyObj = 'who let the dogs out'
      emptyObj = () => {}
      emptyObj = 1231
      emptyObj = { que: 'passa' }
      emptyObj = ['hello']
      emptyObj = null
      emptyObj = undefined
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
