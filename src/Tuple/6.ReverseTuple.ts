export default {}

/**
 * 题六：反转元组
 */

type ReverseTuple<T, A extends any[] = []> = T extends [...infer L, infer R] ? ReverseTuple<L, [...A, R]> : A

type A = ReverseTuple<[string, number, boolean]> // [boolean, number, string]
type B = ReverseTuple<[1, 2, 3]> // [3,2,1]
type C = ReverseTuple<[]> // []

/**
 * 思路解析：
 * 反转也就是将最后项变为首项，之前讲过，元组中可直接拿到最后项
 * 因此，可以遍历拿到每次的最后一项放到A中
 * 当不可拆分时，返回A即可
 */
