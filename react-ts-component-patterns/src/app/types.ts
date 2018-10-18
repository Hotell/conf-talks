export type Omit<T, K> = Pick<T, Exclude<keyof T, K>>
export type Subtract<T, K> = Omit<T, keyof K>
export type FuncArguments<T> = T extends (...any: infer A) => any ? A : never
export type DefaultPropsOf<T> = T extends { defaultProps: infer D } ? D : never
