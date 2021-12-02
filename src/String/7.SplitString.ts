export default {}

/**
 * 题七：将字符串字面量类型按照指定字符，分割为元组。无法分割则返回原字符串字面量
 */

type SplitString<T, S extends string, A extends any[] = []> = T extends `${infer L}${S}${infer R}` ? SplitString<R, S, [...A, L]> : [...A, T]

type A1 = SplitString<'handle-open-flag', '-'>        // ["handle", "open", "flag"]
type A2 = SplitString<'open-flag', '-'>               // ["open", "flag"]
type A3 = SplitString<'handle.open.flag', '.'>        // ["handle", "open", "flag"]
type A4 = SplitString<'open.flag', '.'>               // ["open", "flag"]
type A5 = SplitString<'open.flag', '-'>               // ["open.flag"]

/**
 * 思路解析：
 * 还是拆分递归，只是本次将字符串拆分为三部分L、S、R
 * 递归到最后一次LSR时，将当前的T（最后剩下的不含连接符的字符串）放入到A中
 * 否则将R作为T继续遍历，直到最终不可拆分
 */
