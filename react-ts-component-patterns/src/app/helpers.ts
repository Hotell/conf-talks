export const hasProp = <T extends object, P extends string = string>(
  obj: T,
  prop: P
) => prop in obj

export const hasPropPresent = <T extends object, P extends keyof T = keyof T>(
  obj: T,
  prop: P
): obj is Required<T> => obj[prop] !== undefined

export const isPresent = <T extends unknown>(
  value: T
): value is NonNullable<T> => value !== undefined
