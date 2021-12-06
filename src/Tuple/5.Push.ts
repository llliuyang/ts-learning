export default {}

/**
 * 题五：在元组类型T中添加新的类型I
 */
type Push<T, I> = T extends [...infer M] ? [...M, I] : never

type A = Push<[1, 2, 3], 4> // [1,2,3,4]
type B = Push<[1], 2> // [1, 2]

/**
 * 思路解析：
 * 本题只是一个简单的类型添加，展开操作即可
 * 拓展：
 * 1. 如果I是一个元组呢？
 * 2. 如果I是一个多维元组呢？
 * 后续会有相关题目，先自行思考
 */
