export default {}

/**
 * 题四：字符串转换为元组类型
 */
type StringToTuple<T,A extends Array<any> = []> = T extends `${infer L}${infer R}` ? StringToTuple<R,[...A, L]> : A

type A = StringToTuple<'BFE.dev'> // ['B', 'F', 'E', '.', 'd', 'e','v']
type B = StringToTuple<''> // []

/**
 * 思路解析：
 * 依旧是利用递归拆分
 * 引入一个临时元组(A)存储每次迭代出来的字符(L)
 * 如果后续还能拆分，则进行迭代，直到不能拆分
 * 当不能拆分时，返回元组A即可
 */
