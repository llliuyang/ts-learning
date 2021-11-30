export default {}

/**
 * 题二：获取字符串字面量中的第一个字符
 */

type FirstChar<T> = T extends `${ infer L }${ infer R }` ? L : never;

type A = FirstChar<'BFE'> // 'B'
type B = FirstChar<'dev'> // 'd'
type C = FirstChar<''> // never

/**
 * 思路解析：
 * 看能否被拆成字符串左右两部分（L、R）左：首字母  右：剩余字符
 * 能拆分则直接返回L
 * 不能拆分则返回never
 * 注意：单个字母可以拆分为字母+‘’，例如：‘a' -> L:'a'  R:''
 */
