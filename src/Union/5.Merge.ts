export default {}

/**
 * 题五：合并两个对象类型T以及K，如果属性重复，则以K中属性类型为准
 */

// 方法一
type Merge<T, K> = {
	[key in (keyof T | keyof K)]: key extends keyof K ? K[key] : (
		key extends keyof T ? T[key] : never
		)
}
// 方法二
type Merge1<T, K> = { [key in Exclude<keyof T, keyof K>]: T[key] } & K

type obj1 = {
	el: string,
	age: number
}

type obj2 = {
	el: HTMLElement,
	flag: boolean
}

type obj3 = Merge<obj1, obj2>   // {el:HtmlElement,age:number,flag:boolean}

// 验证
const a = {...{} as obj3}
console.log(a.el.scrollTop, a.age.toFixed(0), a.flag.valueOf())
// console.log(a.el.charAt(0))     // error

/**
 * 思路解析：
 * 将T和 K中的键全部取出作为新的键联合类型进行遍历
 * 既然以K为准，那么先看键key是不是K的子类
 * 如果是，值就为K[key]
 * 如果不是，再看是否是T的子类
 * 是：值为T[key]
 * 否：赋值never就行了
 *
 * 方法二使用交叉类型（intersection type）来组合多个对象类型
 * 先将T中属于K中的键值对去掉
 * 然后再将去掉后的对象类型与原K类型组合
 * 直接使用Omit再组合也行：Omit<T,keyof K> & K
 */
