import { RequiredKeys } from './3.RequiredKeys'

export default {}

/**
 * 题四：保留一个对象中的必须属性
 */
// 方法一
type PickRequired<T> = Pick<T, RequiredKeys<T>>
// 方法二
type PickRequired1<T> = {
	[K in keyof T as Omit<T, K> extends T ? never : K]: T[K]
}

type a1 = PickRequired<{foo: number | undefined, bar?: string, flag: boolean}>        // {foo:number|undefined,flag:boolean}
type a2 = PickRequired<{foo: number, bar?: string}>                                   // {foo:number}
type a3 = PickRequired<{foo: number, flag: boolean}>                                  // {foo:number,flag:boolean}
type a4 = PickRequired<{foo?: number, flag?: boolean}>                                // {}
type a5 = PickRequired<{}>                                                              // {}

/**
 * 思路解析：
 * 同第二题保留可选属性一样，使用内置Pick类型或者构造即可
 * 前四题训练的目的：
 * 1）熟悉可选属性的特点
 * 2）掌握如何如何获取可选、必选属性的方法
 * 3）熟练使用内置Pick类型
 */
