export default {}

/**
 * 题九：驼峰命名转横杠命名
 */

type RemoveFirstHyphen<T> = T extends `-${infer L}` ? L : T

type KebabCase<T, P extends string = ''> = T extends `${infer L}${infer R}` ? KebabCase<R, `${P}${
L extends Uppercase<L> ? `-${Lowercase<L>}` : L
}`> : RemoveFirstHyphen<P>

type a1 = KebabCase<'HandleOpenFlag'>           // handle-open-flag
type a2 = KebabCase<'OpenFlag'>                 // open-flag

/**
 * 思路解析：
 * 遍历每一个字符，如果是大写就转为 连字符+小写
 * 如果是小写，就返回自身，递归拼接
 * 直到不能拆分为止，返回字符串P
 * 最后借助 RemoveFirstHyphen 移除开头的连字符
 */
