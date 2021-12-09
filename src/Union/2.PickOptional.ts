import { OptionalKeys } from './1.OptionalKeys'

export default {}

/**
 * 题二：保留一个对象中的可选属性类型
 */

// 方法一
type PickOptional<T> = Pick<T, OptionalKeys<T>>
// 方法二
type PickOptional1<T> = {
	[K in keyof T as Omit<T, K> extends T ? K : never]: T[K]
}
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
 *
 * 方法二中通过直接构造来解答
 * 用Omit剔除K属性，看看还能不能赋值给原来的类型T
 * 如果能，则说明这个属性K是可选的，返回K
 * 如果不能，则说明该属性是必选的
 */
