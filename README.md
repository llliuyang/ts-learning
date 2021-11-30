## Typescript进阶训练

感谢珠峰架构组织的本次TS进阶训练和痞老板的教学与解惑。

### 学习资料

- [`🏆TS官方文档`](https://www.typescriptlang.org/docs/)
- [`📝TS学习笔记`](https://juejin.cn/post/6844903981227966471)
- [`📌awesome-typescript 仓库`](https://github.com/dzharii/awesome-typescript)
- [`📌awesome-typescript 仓库`](https://github.com/semlinker/awesome-typescript)

### 第一部分：字符串

本部分主要是学习对字符串的处理，学习使用TS解决基础问题的一些思路与方法。

视频地址：[`💖哔哩哔哩- 痞老板很pi`](https://www.bilibili.com/video/BV1EY411s7EY) <br />
题目地址：[`🎈刷起来`](https://www.wolai.com/aE1oVmBGkgqPhzQcwmRuJU) 或者参考下面 `题目列表`

#### 题目列表

<details>
<summary>1. CapitalizeString</summary>

> 首字母大写

```TypeScript
type a1 = CapitalizeString<'handler'>       // Handler
type a2 = CapitalizeString<'parent'>        // Parent
type a3 = CapitalizeString<233>             // 233
```
</details>

<details>
<summary>2. FirstChar</summary>

> 获取字符串字面量中的第一个字符

```TypeScript
type A = FirstChar<'BFE'> // 'B'
type B = FirstChar<'dev'> // 'd'
type C = FirstChar<''> // never
```
</details>

<details>
<summary>3. LastChar</summary>

> 获取字符串字面量中的最后一个字符

```TypeScript
type A = LastChar<'BFE'> // 'E'
type B = LastChar<'dev'> // 'v'
type C = LastChar<''> // never
```
</details>

<details>
<summary>4. StringToTuple</summary>

> 字符串转换为元组类型

```TypeScript
type A = StringToTuple<'BFE.dev'> // ['B', 'F', 'E', '.', 'd', 'e','v']
type B = StringToTuple<''> // []
```
</details>

<details>
<summary>5. TupleToString</summary>

> 将字符串类型的元素转换为字符串字面量类型

```TypeScript
type A = StringToTuple<'BFE.dev'> // ['B', 'F', 'E', '.', 'd', 'e','v']
type B = StringToTuple<''> // []
```
</details>

<details>
<summary>6. RepeatString &lt;T,C&gt;</summary>

> 复制字符T为字符串类型，长度为C

```TypeScript
type A = RepeatString<'a', 3> // 'aaa'
type B = RepeatString<'a', 0> // ''
```
</details>

<details>
<summary>7. SplitString</summary>

> 将字符串字面量类型按照指定字符，分割为元组。无法分割则返回原字符串字面量

```TypeScript
type A1 = SplitString<'handle-open-flag', '-'>        // ["handle", "open", "flag"]
type A2 = SplitString<'open-flag', '-'>               // ["open", "flag"]
type A3 = SplitString<'handle.open.flag', '.'>        // ["handle", "open", "flag"]
type A4 = SplitString<'open.flag', '.'>               // ["open", "flag"]
type A5 = SplitString<'open.flag', '-'>               // ["open.flag"]
```
</details>

<details>
<summary>8. LengthOfString</summary>

> 计算字符串字面量类型的长度

```TypeScript
type A = LengthOfString<'BFE.dev'> // 7
type B = LengthOfString<''> // 0
```
</details>

<details>
<summary>9. KebabCase</summary>

> 驼峰命名转横杠命名

```TypeScript
type a1 = KebabCase<'HandleOpenFlag'>           // handle-open-flag
type a2 = KebabCase<'OpenFlag'>                 // open-flag
```
</details>

<details>
<summary>10. CamelCase</summary>

> 横杠命名转化为驼峰命名

```TypeScript
type a1 = CamelCase<'handle-open-flag'>         // HandleOpenFlag
type a2 = CamelCase<'open-flag'>                // OpenFlag
```
</details>

<details>
<summary>11. ObjectAccessPaths</summary>

> 得到对象中的值访问字符串

```TypeScript
// 简单来说，就是根据如下对象类型：
/*
{
    home: {
        topBar: {
            title: '顶部标题',
            welcome: '欢迎登录'
        },
        bottomBar: {
            notes: 'XXX备案，归XXX所有',
        },
    },
    login: {
        username: '用户名',
        password: '密码'
    }
}
*/
// 得到联合类型：
/*
home.topBar.title | home.topBar.welcome | home.bottomBar.notes | login.username | login.password
*/

// 完成 createI18n 函数中的 ObjectAccessPaths<Schema>，限制函数i18n的参数为合法的属性访问字符串
function createI18n<Schema>(schema: Schema): ((path: ObjectAccessPaths<Schema>) => string) {return [{schema}] as any}

// i18n函数的参数类型为：home.topBar.title | home.topBar.welcome | home.bottomBar.notes | login.username | login.password
const i18n = createI18n({
	home: {
		topBar: {
			title: '顶部标题',
			welcome: '欢迎登录'
		},
		bottomBar: {
			notes: 'XXX备案，归XXX所有',
		},
	},
	login: {
		username: '用户名',
		password: '密码'
	}
})

i18n('home.topBar.title')           // correct
i18n('home.topBar.welcome')         // correct
i18n('home.bottomBar.notes')        // correct

// i18n('home.login.abc')              // error，不存在的属性
// i18n('home.topBar')                 // error，没有到最后一个属性
```
</details>

<details>
<summary>12. ComponentEmitsType</summary>

> 定义组件的监听事件类型

```TypeScript
// 实现 ComponentEmitsType<Emits> 类型，将
/*
{
    'handle-open': (flag: boolean) => true,
    'preview-item': (data: { item: any, index: number }) => true,
    'close-item': (data: { item: any, index: number }) => true,
}
*/
// 转化为类型
/*
{
    onHandleOpen?: (flag: boolean) => void,
    onPreviewItem?: (data: { item: any, index: number }) => void,
    onCloseItem?: (data: { item: any, index: number }) => void,
}
*/


function createComponent<Emits extends Record<string, any>>(emits: Emits): ComponentEmitsType<Emits> {return [{emits}] as any}

// 最后返回的 Component变量类型为一个合法的React组件类型，并且能够通过`on事件驼峰命名`的方式，监听定义的事件，并且能够自动推导出事件的参数类型
const Component = createComponent({
	'handle-open': (flag: boolean) => true,
	'preview-item': (data: { item: any, index: number }) => true,
	'close-item': (data: { item: any, index: number }) => true,
})
console.log(
	<Component
		// onHandleOpen 的类型为 (flag: boolean) => void
		onHandleOpen={val => console.log(val.valueOf())}
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

const Comp: { (props: { name: string, age: number, flag: boolean, id?: string }): any } = Function as any

console.log(<Comp name="" age={1} flag/>)           // 正确
console.log(<Comp name="" age={1} flag id="111"/>)  // 正确
// console.log(<Comp name={1} age={1} flag/>)          // 错误，name为字符串类型
// console.log(<Comp age={1} flag/>)                   // 错误，缺少必须属性name:string
```
</details>

