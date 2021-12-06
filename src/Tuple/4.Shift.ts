export default {}

/**
 * 题四：移除元组类型中的第一个类型
 */

type Shift<T> = T extends [infer L, ...infer R] ? R : T

type A = Shift<[1, 2, 3]> // [2,3]
type B = Shift<[1]> // []
type C = Shift<[]> // []

/**
 * 思路解析：
 * 之前说过，元组拆分中，可以直接拿到第一项
 * 因此如果能拆分则返回R部分即可
 * 不可拆分时，直接返回原始数据T
 */
