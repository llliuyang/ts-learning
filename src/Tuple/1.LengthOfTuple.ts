export default {}

/**
 * 题一：计算元组类型的长度
 */

type LengthOfTuple<T extends any[]> = T['length']

type A = LengthOfTuple<['B', 'F', 'E']> // 3
type B = LengthOfTuple<[]> // 0

/**
 * 思路解析：
 * 之前在计算字符串长度时，我们经常提到使用元组长度来计算
 * 本题的解题思路可以直接使用元组的长度来完成
 * 相当于一个复习吧。加深印象
 */
