export default {}

/**
 * 题六：复制字符T为字符串类型，长度为C
 */

type RepeatString<T extends string, C, A extends any[] = [], P extends string = ''> = C extends A['length'] ? P : RepeatString<T, C, [...A, null], `${P}${T}`>

type A = RepeatString<'a', 3> // 'aaa'
type B = RepeatString<'b', 2> // 'bb'
type C = RepeatString<'c', 1> // 'c'
type D = RepeatString<'d', 0> // ''

/**
 * 思路解析：
 * 在TS类型与操作中，凡是涉及到数字类型的计算，基本上都要使用元组的长度
 * 需要计算长度，所以我们需要一个元组(A)
 * 还需要最后拼接的字符串，因此再设定一个字符串(P)，默认为空字符串
 * 通过判断元组的长度是否与给定的C相等来进行下一步操作
 * 如果相等，就返回拼接好的字符串P
 * 若果不相等，就继续将P与T拼接
 * 整体思想还是使用递归，当元组长度未达到C时，我们往元组里面追加一个元素（任意，只要能让其长度+1）
 */
