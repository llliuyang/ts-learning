import { ExcludeUndefined } from './1.OptionalKeys'

export default {}

/**
 * 题三：获取对象类型中的必须属性的联合类型
 */

// 方法一
export type RequiredKeys<T, K = keyof T> = K extends keyof T ? (
	undefined extends ExcludeUndefined<T>[K] ? never : K
	) : never
// 方法二
type RequiredKeys1<T> = { [K in keyof T]-?: undefined extends ExcludeUndefined<T>[K] ? never : K }[keyof T]

type a1 = RequiredKeys<{foo: number | undefined, bar?: string, flag: boolean}>        // foo|flag
type a2 = RequiredKeys<{foo: number, bar?: string}>                                   // foo
type a3 = RequiredKeys<{foo: number, flag: boolean}>                                  // foo|flag
type a4 = RequiredKeys<{foo?: number, flag?: boolean}>                                // never
type a5 = RequiredKeys<{}>                                                              // never

/**
 * 思路解析：
 * 本题与题一的要求正好相反
 * 因此只需要将相关的赋值反过来即可
 * 思路方法与第一题完全一致，不再赘述
 */
