import { OptionalKeys } from './1.OptionalKeys'

export default {}

/**
 * 题二：保留一个对象中的可选属性类型
 */
type PickOptional<T> = Pick<T, OptionalKeys<T>>

type a1 = PickOptional<{foo: number | undefined, bar?: string, flag: boolean}>        // {bar?:string|undefined}
type a2 = PickOptional<{foo: number, bar?: string}>                                   // {bar?:string}
type a3 = PickOptional<{foo: number, flag: boolean}>                                  // {}
type a4 = PickOptional<{foo?: number, flag?: boolean}>                                // {foo?:number,flag?:boolean}
type a5 = PickOptional<{}>                                                              // {}

/**
 * 思路解析：
 * 通过题一，我们可以拿到可选属性的key
 * 直接通过内置类型Pick快速选出我们需要的即可
 * Pick类型源码：
 * type Pick<T, K extends keyof T> = {
 *     [P in K]: T[P]
 * }
 */
