export default {}

/**
 * 题十一：得到对象中的值访问字符串
 */

// 得到联合类型：
/*
home.topBar.title | home.topBar.welcome | home.bottomBar.notes | login.username | login.password
*/

type RemoveFirstDot<T> = T extends `.${infer L}` ? L : T
type ObjectAccessPaths<T, P extends string = '', K = keyof T> = K extends keyof T ? (
	K extends string ? (
		T[K] extends Record<string, any> ?
			ObjectAccessPaths<T[K], `${P}.${K}`> : RemoveFirstDot<`${P}.${K}`>
		) : never
	) : never

// 完成 createI18n 函数中的 ObjectAccessPaths<Schema>，限制函数i18n的参数为合法的属性访问字符串
function createI18n<Schema>(schema: Schema): ((path: ObjectAccessPaths<Schema>) => string) {
	return [{schema}] as any
}

// i18n函数的参数类型为：home.topBar.title | home.topBar.welcome | home.bottomBar.notes | login.username | login.password
const i18n = createI18n({
	home: {
		topBar: {
			title: '顶部标题',
			welcome: '欢迎登录'
		},
		bottomBar: {
			notes: 'XXX备案，归XXX所有'
		}
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

/**
 * 思路解析：
 * 通过遍历对象的key得到联合类型
 * T: 传入的路径对象  P: 拼接的字符串  K: 对象的key
 * K 肯定是对象的key，这里的never没用，这一步主要是为了获得对象key的分布情况
 * 遍历一次后判断对象的值T[K]是否依旧是对象
 * 如果T[K]是对象，那就继续遍历，只是此时的第一个参数T变为T[K]，第二个参数P则是拼接的字符串 `${P}.${K}`
 * 如果不是对象，就返回拼接好的字符串`${P}.${K}`即可
 * 注意：由于P的初始值为空字符串，所以最终拼接的字符串开头也有连接符（.），所以最终借助RemoveFirstDot去掉
 * 整体思路还是不停的去遍历检查，要学会灵活运用与变通
 */
