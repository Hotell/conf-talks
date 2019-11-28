export const main = () => {
  const someArr = ['hello', null, 'darkness', undefined, 'my', 'old', 'friend']

  const filterBlank = someArr.filter(Boolean)
  const filterBlank2 = someArr.filter((val) => val != null)

  const stringArr = someArr.filter(isPresent)
  const emptyArr = someArr.filter(isBlank)
}

type Nullable<T> = T extends null | undefined ? T : never

const isPresent = <T>(value: T): value is NonNullable<T> => value != null

const isBlank = <T>(value: T): value is Nullable<T> => value == null
