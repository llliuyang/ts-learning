import { FindIndex } from './11.FindIndex'

export default {}

/**
 * 题十二：元组类型转换为枚举类型
 */

type TupleToEnum<T extends string[], B = false> = { readonly [K in T[number]]: B extends true ? FindIndex<T, K> : K }

// 默认情况下，枚举对象中的值就是元素中某个类型的字面量类型
type a1 = TupleToEnum<["MacOS", "Windows", "Linux"]>
// -> { readonly MacOS: "MacOS", readonly Windows: "Windows", readonly Linux: "Linux" }

// 如果传递了第二个参数为true，则枚举对象中值的类型就是元素类型中某个元素在元组中的index索引，也就是数字字面量类型
type a2 = TupleToEnum<["MacOS", "Windows", "Linux"], true>
// -> { readonly MacOS: 0, readonly Windows: 1, readonly Linux: 2 }

/**
 * 思路解析：
 * 观察目标类型特征进行解题
 * K in T[number] 拿到T中的每一个值，number为元组元素的额下标
 * 判断B是否为true
 * 如果为true，就利用之前写的类型FindIndex找出下标
 * 如果不是true，则直接返回K就行了
 */
