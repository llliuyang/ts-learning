export default {}

/**
 * 题三：得到元组类型中的最后一个元素
 */
type LastItem<T> = T extends [...infer L, infer R] ? R : never

type A = LastItem<[string, number, boolean]> // boolean
type B = LastItem<['B', 'F', 'E']> // 'E'
type C = LastItem<[]> // never


/**
 * 思路解析：
 * 参照题二：得到元组类型中的第一个元素
 * 元组中可以直接拿到第一个和最后一个元素
 * 依旧是使用infer 拆分
 * 第一项：[infer L, ...infer R] --> L
 * 最后项：[...infer L, infer R] --> R
 */
