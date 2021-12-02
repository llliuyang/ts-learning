export default {}

/**
 * 题十：横杠命名转化为驼峰命名
 */

// 方法一
export type CamelCase1<T extends string, S extends string = ''> = T extends `${infer L}-${infer R1}${infer R2}` ? CamelCase1<R2, `${S}${L}${Uppercase<R1>}`> : Capitalize<`${S}${T}`>

// 方法二
type CamelCase2<T extends string, S extends string = ''> = T extends `${infer L}-${infer R}` ? CamelCase2<R, `${S}${Capitalize<L>}`> : `${S}${Capitalize<T>}`

type a1 = CamelCase1<'handle-open-flag'>         // HandleOpenFlag
type a2 = CamelCase2<'open-flag'>                // OpenFlag

/**
 * 思路解析：
 * 方法一：拆分成 L-R1R2 的形式，将R1大写，进行拼接，最后将拼接好的字符串再首字母大写
 * 方法二：拆分成 L-R 形式，将L的首字母大写，最后剩下的T再执行首字母大写
 * 两种方法原理是一样的，拆分方法不同，都是遍历拼接
 * 借助了内置的Capitalize，也可以使用自己写的方法
 */
