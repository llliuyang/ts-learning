export default {}

/**
 * 题五：将字符串类型的元素转换为字符串字面量类型
 */

type TupleToString<T, S extends string = ''> = T extends [infer L, ...infer R] ? (L extends string ? TupleToString<R, `${S}${L}`> : never) : S;

type A = TupleToString<['a', 'b', 'c']> // 'abc'
type B = TupleToString<[]>              // ''
type C = TupleToString<['a']>           // 'a'

/**
 * 思路解析：
 * [infer L, ...infer R]比模板字符串的有点在于可以灵活拿到第一个元素或者最后一个元素
 * 最后一个：[...infer L, infer R]
 * 引入字符串(S)拼接每次迭代出来的字符(L)
 * 如果后续还能拆分，则进行迭代，直到不能拆分
 * 当不能拆分时，返回拼接完成的S即可
 * 注意：注意判断一下L是否为字符串类型，否则会报错
 */
