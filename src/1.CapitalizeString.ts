export default {}

/**
 * 题一： 首字母大写
 */

type CapitalizeString<T> = T extends `${ infer L }${ infer R }` ? `${ Uppercase<L> }${ R }` : T;

type a1 = CapitalizeString<'handler'>
type a2 = CapitalizeString<'parent'>
type a3 = CapitalizeString<233>

/**
 * 思路解析：
 * 看能否被拆成字符串左右两部分（L、R）左：首字母  右：剩余字符
 * 能拆分则将首字母进行uppercase转换
 * 不是字符串则直接返回原字符
 */
