import {Diff} from '@martin_hotell/rex-tils'
export type Omit<T, K> = Pick<T, Exclude<keyof T, K>>
export type Subtract<T, K> = Omit<T, keyof K>
export type FuncArguments<T> = T extends (...any: infer A) => any ? A : never
export type DefaultPropsOf<T> = T extends { defaultProps: infer D } ? D : never


export type FunctionalComponent<P extends object,DP extends object = never,FinalProps = DP extends object ? Diff<P,DP> & Partial<DP>: P, R = unknown> = {
  (props:FinalProps): import('react').ReactElement<R>
  defaultProps?: DP
}

export type ExtractFuncArguments<T> = T extends (...args: infer A) => any ? A : never