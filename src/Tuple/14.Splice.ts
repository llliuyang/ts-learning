export default {}

/**
 * 题十四：删除并且替换部分元素
 * @T 给定的数组
 * @S Start 开始下标
 * @N 删除的个数
 * @A addArray 添加的内容
 * @SA StartArray 用来记录开始删除的位置
 * @EA EndArray 用来记录停止删除的位置
 * @P 最后返回保留的结果
 */

type Splice<T extends any[],
	S extends number,
	N extends number,
	A extends any[] = [],
	SA extends any[] = [],
	EA extends any[] = [],
	P extends any[] = []> = T extends [infer L, ...infer R] ? (
	SA['length'] extends S ? (
		EA['length'] extends N ? [...P, ...A, ...T] : Splice<R, S, N, A, SA, [...EA, null], P>
		) : Splice<R, S, N, A, [...SA, null], EA, [...P, L]>
	) : P

type A1 = Splice<[string, number, boolean, null, undefined, never], 0, 2>                   // [boolean,null,undefined,never]               从第0开始删除，删除2个元素
type A2 = Splice<[string, number, boolean, null, undefined, never], 1, 3>                   // [string,undefined,never]                     从第1开始删除，删除3个元素
type A3 = Splice<[string, number, boolean, null, undefined, never], 1, 2, [1, 2, 3]>        // [string,1,2,3,null,undefined,never]          从第1开始删除，删除2个元素，替换为另外三个元素1,2,3

/**
 * 思路解析：
 * 结合前面Slice分析一下：
 * Slice是从开始位置到结束位置之间进行保留
 * Splice刚好相反，是摒弃掉区间内的，结果为：S前的部分+添加部分+剩余部分
 * 因此，还是先拆分，能拆进行下一步，不能拆返回P
 * 能拆分时，判断SA的长度是否和S一致：
 * 不一致：
 * 1）继续对R执行Splice,S、N不变，SA长度+1
 * 2）EA长度不变（因为我们此处的N不是下标，而是个数，所以此处先不用改变EA长度，等开始删除时再操作）
 * 3）将L部分放入P中保留
 * 一致的话，再判断EA的长度是否与N一致：
 * 一致：说明已经删除完毕，将P、A和剩余的T拼接返回即可
 * 不一致：说明删除个数不够
 * 1）继续对R执行Splice
 * 2）S,N，A.SA，P不变，此时需要将EA长度+1
 * 3）等EA长度与N一致，则说明删除结束
 */
