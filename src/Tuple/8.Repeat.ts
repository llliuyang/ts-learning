export default {}

/**
 * 题八：复制类型T为C个元素的元组类型
 */

type Repeat<T, C, A extends any[] = []> = A['length'] extends C ? A : Repeat<T, C, [...A, T]>

type A = Repeat<number, 3> // [number, number, number]
type B = Repeat<string, 2> // [string, string]
type C = Repeat<1, 1> // [1]
type D = Repeat<0, 0> // []

/**
 * 思路解析：
 * 知识回顾：涉及到数字的计算首先想到元组长度
 * 添加一个临时类型A来计算长度
 * 如果A的长度与给定的C相等，那就返回A
 * 如果不相等，继续执行，将A改为A拼接上T
 */
