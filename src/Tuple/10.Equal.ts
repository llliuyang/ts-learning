export default {}

/**
 * 题十：判断类型T与类型K是否相等
 */

type Equal<T, K> = [T] extends [K] ? [K] extends [T] ? (
	keyof T extends keyof K ? keyof K extends keyof T ? true : false : false
	) : false : false

type A1 = Equal<any, any>      // true
type A2 = Equal<any, 1>      // false
type A3 = Equal<never, never>      // true
type A4 = Equal<'BFE', 'BFE'>      // true
type A5 = Equal<'BFE', string>      // false
type A6 = Equal<1 | 2, 2 | 1>      // true
type A7 = Equal<{a: number}, {a: number}>      // true

type N = keyof 1
type S = keyof 'hello'
type A = keyof any  // string | number | symbol
/**
 * 思路解析：
 * 判断两个类型是否相等，可以判断两个类型的元组类型是否相等
 * 先判断[T] extends [K]是否成立，成立则进行下一步判断，不成立返回false
 * 如果成立再判断[K] extends [T]是否成立，成立返回true，不成立返回false
 * 进行到这里，大部分都可以直接解决，但是存在特殊情况any，例如：type A2 --> true
 *
 * 注意：any 类型可以赋值给任意类型，任意类型也可以赋值给 any 类型
 *
 * 那么如何判断any类型与其它类型是否相等呢？
 * 我们可以通过keyof来进行判断。
 * 数字与字符串或者symbol的keyof拿到的是一些方法函数
 * any则是联合类型string | number | symbol
 * undefined、null、never、unknown拿到的是never
 *
 * 为何判断了[T] extends [K]还要判断[K] extends [T]？
 * TS中，子类型可以是父类型的继承，但反过来则不成立
 * 例如：['BFE'] extends [string] 是成立的，但是 [string] extends ['BFE'] 不成立
 * 因此，判断两个类型是否相等，需要都判断一次
 */
