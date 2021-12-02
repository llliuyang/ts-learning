export default {}

/**
 * 题三：获取字符串字面量中的最后一个字符
 */
type LastChar<T, P = never> = T extends `${infer L}${infer R}` ? LastChar<R, L> : P

type A = LastChar<'BFE'> // 'E'
type B = LastChar<'dev'> // 'v'
type C = LastChar<''> // never

/**
 * 思路解析：
 * 大体思路还是和之前一样，判断是否能拆分
 * 本次代码中需要引入一个新的临时变量入参，用于存储每次拆分的首字母（L）
 * 如果后续还能拆分，则进行迭代，直到不能拆分
 * 当不能拆分时，返回最后一次存储的字母就是最后一个
 */
