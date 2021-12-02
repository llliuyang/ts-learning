import { CamelCase1 } from './10.CamelCase'

export default {}

/**
 * 题十二：定义组件的监听事件类型
 */

// 实现 ComponentEmitsType<Emits> 类型，将
/*
type Source = {
	'handle-open': (flag: boolean) => true,
	'preview-item': (data: {item: any, index: number}) => true,
	'close-item': (data: {item: any, index: number}) => true,
}
*/
// type Target = ComponentEmitsType<Source>
// 转化为类型
/*
type Target = {
    onHandleOpen?: (flag: boolean) => void,
    onPreviewItem?: (data: { item: any, index: number }) => void,
    onCloseItem?: (data: { item: any, index: number }) => void,
}
*/

type ComponentEmitsType<T> = {
	[K in keyof T as `on${K extends string ? CamelCase1<K> : ''}`]?: T[K] extends ((...args: infer A) => any) ? (...args: A) => void : T[K]
}

function createComponent<Schema>(schema: Schema):{(props:ComponentEmitsType<Schema>): any}{
	return [{schema}] as any
}

// 最后返回的 Component变量类型为一个合法的React组件类型，并且能够通过`on事件驼峰命名`的方式，监听定义的事件，并且能够自动推导出事件的参数类型
const Component = createComponent({
	'handle-open': (flag: boolean) => true,
	'preview-item': (data: {item: any, index: number}) => true,
	'close-item': (data: {item: any, index: number}) => true
})

const handler ={
	onHandleOpen: (val: boolean) => {
		console.log(val.valueOf())
	}
}

console.log(
	<Component
		// onHandleOpen 的类型为 (flag: boolean) => void
		onHandleOpen={handler.onHandleOpen}
		// onPreviewItem 的类型为 (data: { item: any, index: number }) => void
		onPreviewItem={val => {
			const {item, index} = val
			const a: number = item
			console.log(a, index.toFixed(2))
}}
// 所有的监听事件属性都是可选属性，可以不传处理函数句柄
// onCloseItem={val => [{val}]}
/>
)

// 提示，定义组件的props类型方式为 { (props: Partial<Convert<Emits>>): any }
// 比如 Comp 可以接收属性 {name:string, age:number, flag:boolean, id?:string}，其中id为可选属性，那么可以这样写

const Comp: {(props: {name: string, age: number, flag: boolean, id?: string}): any} = Function as any

console.log(<Comp name="" age={1} flag/>)           // 正确
console.log(<Comp name="" age={1} flag id="111"/>)  // 正确
// console.log(<Comp name={1} age={1} flag/>)          // 错误，name为字符串类型
// console.log(<Comp age={1} flag/>)                   // 错误，缺少必须属性name:string

