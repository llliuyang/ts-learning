export default {}

/**
 * 题八：计算字符串字面量类型的长度
 */
type LengthOfString<T, A extends any[] = []> = T extends `${infer L}${infer R}` ? LengthOfString<R, [...A, L]> : A['length']

type A = LengthOfString<'BFE.dev'> // 7
type B = LengthOfString<''> // 0

/**
 * 思路解析：
 * 老规矩，涉及到数字的运算，借助元组长度
 * 如果可以拆分，则将L存入A中，继续递归
 * 如果不可拆分，返回元组长度即可
 */
