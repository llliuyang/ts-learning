export default {}

/**
 * 题七：拍平元组
 */

type Flat<T> = T extends [infer L, ...infer R] ? [...(L extends any[] ? Flat<L> : [L]), ...Flat<R>] : T

type A = Flat<[1, 2, 3]> // [1,2,3]
type B = Flat<[1, [2, 3], [4, [5, [6]]]]> // [1,2,3,4,5,6]
type C = Flat<[]> // []
type D = Flat<[1]> // [1]

/**
 * 思路解析：
 * 先拿到元组的第一项，看是否需要拍平
 * 需要拍平则继续执行，最终不需要拍平，将其封装成数组返回
 * 继续执行Flat<R>，循环执行到不需要拍平时，返回R
 * 最后将结果展开到新元组中
 * T 不符合条件直接返回原数据
 *
 * 回到题5的拓展中，就可以使用Flat类型去拍平I
 */
