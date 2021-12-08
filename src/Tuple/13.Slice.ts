export default {}

/**
 * 题十三：截取元组中的部分元素
 * @S Start 开始位置
 * @E End		结束为止
 * @P Prev	返回结果
 * @SA StartArray 开始前的元组，记录开始时机
 * @EA EndArray  结束元组，用于记录结束时机
 */

type Slice<T extends any[],
	S extends number,
	E extends number = T['length'],
	SA extends any[] = [],
	EA extends any[] = [],
	P extends any[] = []> = T extends [infer L, ...infer R] ? (
	SA['length'] extends S ? (
		EA['length'] extends E ? [...P, L] : Slice<R, S, E, SA, [...EA, null], [...P, L]>
		) : Slice<R, S, E, [...SA, null], [...EA, null], P>
	) : P

type A1 = Slice<[any, never, 1, '2', true, boolean], 0, 2>          // [any,never,1]                    从第0个位置开始，保留到第2个位置的元素类型
type A2 = Slice<[any, never, 1, '2', true, boolean], 1, 3>          // [never,1,'2']                    从第1个位置开始，保留到第3个位置的元素类型
type A3 = Slice<[any, never, 1, '2', true, boolean], 1, 2>          // [never,1]                        从第1个位置开始，保留到第2个位置的元素类型
type A4 = Slice<[any, never, 1, '2', true, boolean], 2>             // [1,'2',true,boolean]             从第2个位置开始，保留后面所有元素类型
type A5 = Slice<[any], 2>                                           // []                               从第2个位置开始，保留后面所有元素类型
type A6 = Slice<[], 0>                                              // []                               从第0个位置开始，保留后面所有元素类型

/**
 * 思路解析：
 * 本题相较于之前的题目，难度有所提升，但解决思路还是一致
 * 按照以往的思路，先拆分，截取一个就将L放到元组中去
 * 本题难点就在于我们如何得知什么时候开始，什么时候结束？
 * 本题涉及到2个数字，一直在重复的：涉及到数字计算应先想到运用元组的长度来解决
 * 因此，本题也会用到两个额外的元组，用来计算开始与结束的时机
 * 先拆分，能拆分则进行下一步，不能拆分直接返回P即可
 * 能拆分时：先看记录起始位置的元组SA的长度是否为开始位置S
 * 如果不等于，则继续对R进行Slice，将SA和EA的长度都要进行+1
 * 如果等于了，再看EA的长度是否等于E
 * 等于E，则说明已经截取完了，返回P即可，如果是右闭合的话，记得还要加上最后的L
 * 如果不等于，则还是要继续对剩余部分R进行截取
 * 此时只需要对EA的长度进行+1即可，SA的长度保持不变
 * 注意每次截取也需要将L添加到P中去
 */
