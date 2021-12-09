export default {}

/**
 * 题一：获取对象类型中的可选属性的联合类型
 */

export type ExcludeUndefined<T> = { [K in keyof T]: Exclude<T[K], undefined> }
//  方法一
export type OptionalKeys<T, K = keyof T> = K extends keyof T ? (
	undefined extends ExcludeUndefined<T>[K] ? K : never
	) : never
// 方法二
type OptionalKeys1<T> = { [K in keyof T]-?: undefined extends ExcludeUndefined<T>[K] ? K : never }[keyof T]

type a1 = OptionalKeys<{foo: number | undefined, bar?: string, flag: boolean}>        // bar
type a2 = OptionalKeys<{foo: number, bar?: string}>                                   // bar
type a3 = OptionalKeys<{foo: number, flag: boolean}>                                  // never
type a4 = OptionalKeys<{foo?: number, flag?: boolean}>                                // foo|flag
type a5 = OptionalKeys<{}>                                                            // never

/**
 * 思路解析：
 * 本题的难点在于怎么去确定一个对象的属性是否可选
 * 知识点：在开启了严格空检查的情况下：
 * TS 会自动给可选属性的值类型联合上一个 undefined 类型
 * 因此我们可以依靠判断是否联合了 undefined 类型来判断是否是可选属性
 *
 * 首先我们需要一个排除值中赋值undefined类型的方法ExcludeUndefined，避免误伤
 * 然后判断值中是否还包含undefined类型，如果有则是可选属性（因为我们之前将必选直接赋值undefined的排除了）返回K
 * 不包含则说明是必选属性，返回个never即可
 *
 * 方法二中使用了 -? 操作符: 删除可选操作符，即将可选变为必选
 * 可参考https://stackoverflow.com/questions/53311845/typescript-remove-optional-property
 * 执行ExcludeUndefined后，如果值上依旧有undefined类型，则说明是可选属性，将其值改为键名
 * 如果不包含，则说明是必选的，将值赋值为never
 * 最后取值即可（因为上一步将可选的值改为了键名，必选的为never）
 */
