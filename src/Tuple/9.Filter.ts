export default {}

/**
 * 题九：保留元组类型T中的K类型
 */

type Filter<T, K, A extends any[] = []> = T extends [infer L, ...infer R] ? Filter<R, K, ([L] extends [K] ? [...A, L] : A)> : A

type A = Filter<[1, 'BFE', 2, true, 'dev'], number> // [1, 2]
type B = Filter<[1, 'BFE', 2, true, 'dev'], string> // ['BFE', 'dev']
type C = Filter<[1, 'BFE', 2, any, 'dev'], string> // ['BFE', any, 'dev']

/**
 * 思路解析：
 * 本题的难点在于如何确定一项是否是给定的类型
 * 我们知道，在元组中，每一项对应的类型都是确定的，因此我们可以利用这一特性
 * 例如： [number,string,boolean] --> [2,'hello',true]
 * 如果是一项的话，可以直接使用 [string]  [number] 来约束
 * 本题中，先是拆分，拿到第一项
 * 如果能拆分，则继续拆分，不能拆分就返回A
 * 能拆分的话，第一个参数就变成剩余部分R
 * 第二参数不变，继续寻找K类型
 * 关键是第三个参数A
 * 如果L是K类型：即 [L] extends [K] 成立，就将L放入到我们的A中去
 * 如果L不是K类型，那么不用改变，继续使用原来的A
 * 最终A就是我们需要的目标元组
 */
