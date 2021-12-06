export default {}

/**
 * 题二：得到元组类型中的第一个元素
 */

type FirstItem<T> = T extends [infer L, ...infer R] ? L : never

type A = FirstItem<[string, number, boolean]> // string
type B = FirstItem<['B', 'F', 'E']> // 'B'

/**
 * 思路解析：
 * 元组中可以直接拿到第一个和最后一个元素
 * 依旧是使用infer 拆分
 * 第一项：[infer L, ...infer R] --> L
 * 最后项：[...infer L, infer R] --> R
 */
