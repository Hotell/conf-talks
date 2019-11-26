export const main = () => {
  {
    let emptyObj = {}
    // let emptyObj: object = {}
    // let emptyObj: {who:string} = {}
    // let emptyObj = {} as { who: string }
    // let emptyObj = null as { who: string } | null
    // let emptyObj: Record<string,string> = {}
    // let emptyObj: {who:string} | null = null

    emptyObj = 'dfdfs'
    emptyObj = () => {}
    emptyObj = 1231
    emptyObj = { que: 'passa' }
    emptyObj = ['hello']
    emptyObj = null
    emptyObj = undefined
    // emptyObj = { who: 'me' }
    // emptyObj.what = 'sdfds'
    // emptyObj.who = 'sdfds'
  }

  {
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
