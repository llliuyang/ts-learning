import { Equal } from './10.Equal'

export default {}

/**
 * 题十一：找出E类型在元组类型T中的下标
 */

type FindIndex<T extends any[], E, A extends any[] = []> = T extends [infer L, ...infer R] ? (
	Equal<L, E> extends true ? A['length'] : FindIndex<R, E, [...A, null]>
	) : never

type A = [any, never, 1, '2', true]
type B = FindIndex<A, 1> // 2
type C = FindIndex<A, true> // 4
type D = FindIndex<A, 3> // never

/**
 * 思路解析：
 * 借助题10的知识，我们判断E与L是否相等
 * 如果相等，就返回元组A的长度
 * 如果不相等，就继续拆分遍历，将元组A的长度+1
 */
