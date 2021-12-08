## 第二部分：元组

本部分着重锻炼对于元组类型的操作,加深对于元组长度的应用。

视频地址：[`💖元组`](https://www.bilibili.com/video/BV1db4y1B7ca) <br />

### 题目列表

<details>
<summary>1. LengthOfTuple</summary>

```TypeScript
// 计算元组类型的长度
type A = LengthOfTuple<['B', 'F', 'E']> // 3
type B = LengthOfTuple<[]> // 0
```
</details>

<details>
<summary>2. FirstItem</summary>

```TypeScript
// 得到元组类型中的第一个元素
type A = FirstItem<[string, number, boolean]> // string
type B = FirstItem<['B', 'F', 'E']> // 'B'
```
</details>

<details>
<summary>3. LastItem</summary>

```TypeScript
// 得到元组类型中的最后一个元素
type A = LastItem<[string, number, boolean]> // boolean
type B = LastItem<['B', 'F', 'E']> // 'E'
type C = LastItem<[]> // never
```
</details>

<details>
<summary>4. Shift</summary>

```TypeScript
// 移除元组类型中的第一个类型
type A = Shift<[1, 2, 3]> // [2,3]
type B = Shift<[1]> // []
type C = Shift<[]> // []
```
</details>

<details>
<summary>5. Push</summary>

```TypeScript
// 在元组类型T中添加新的类型I
type A = Push<[1,2,3], 4> // [1,2,3,4]
type B = Push<[1], 2> // [1, 2]
```
</details>

<details>
<summary>6. ReverseTuple</summary>

```TypeScript
// 反转元组
type A = ReverseTuple<[string, number, boolean]> // [boolean, number, string]
type B = ReverseTuple<[1, 2, 3]> // [3,2,1]
type C = ReverseTuple<[]> // []
```
</details>

<details>
<summary>7. Flat</summary>

```TypeScript
// 拍平元组
type A = Flat<[1, 2, 3]> // [1,2,3]
type B = Flat<[1, [2, 3], [4, [5, [6]]]]> // [1,2,3,4,5,6]
type C = Flat<[]> // []
type D = Flat<[1]> // [1]
```
</details>

<details>
<summary>8. Repeat</summary>

```TypeScript
// 复制类型T为C个元素的元组类型
type A = Repeat<number, 3> // [number, number, number]
type B = Repeat<string, 2> // [string, string]
type C = Repeat<1, 1> // [1]
type D = Repeat<0, 0> // []
```
</details>

<details>
<summary>9. Filter</summary>

```TypeScript
// 保留元组类型T中的A类型
type A = Filter<[1,'BFE', 2, true, 'dev'], number> // [1, 2]
type B = Filter<[1,'BFE', 2, true, 'dev'], string> // ['BFE', 'dev']
type C = Filter<[1,'BFE', 2, any, 'dev'], string> // ['BFE', any, 'dev']
```
</details>

<details>
<summary>10. Equal</summary>

```TypeScript
// 判断类型T与类型K是否相等
type A1 = Equal<any, any>      // true
type A2 = Equal<any, 1>      // false
type A3 = Equal<never, never>      // true
type A5 = Equal<'BFE', string>      // false
type A6 = Equal<1 | 2, 2 | 1>      // true
type A7 = Equal<{a: number}, {a: number}>      // true
```
</details>

<details>
<summary>11. FindIndex</summary>

```TypeScript
// 找出E类型在元组类型T中的下标
type A = [any, never, 1, '2', true]
type B = FindIndex<A, 1> // 2
type C = FindIndex<A, 3> // never
```
</details>

<details>
<summary>12. TupleToEnum</summary>

```TypeScript
// 元组类型转换为枚举类型
// 默认情况下，枚举对象中的值就是元素中某个类型的字面量类型
type a1 = TupleToEnum<["MacOS", "Windows", "Linux"]>
// -> { readonly MacOS: "MacOS", readonly Windows: "Windows", readonly Linux: "Linux" }

// 如果传递了第二个参数为true，则枚举对象中值的类型就是元素类型中某个元素在元组中的index索引，也就是数字字面量类型
type a2 = TupleToEnum<["MacOS", "Windows", "Linux"], true>
// -> { readonly MacOS: 0, readonly Windows: 1, readonly Linux: 2 }
```
</details>

<details>
<summary>13. Slice</summary>

```TypeScript
// 截取元组中从下标S到下标E的元素
type A1 = Slice<[any, never, 1, '2', true, boolean], 0, 2>          // [any,never,1]
type A2 = Slice<[any, never, 1, '2', true, boolean], 1, 3>          // [never,1,'2']
type A3 = Slice<[any, never, 1, '2', true, boolean], 1, 2>          // [never,1] 
type A4 = Slice<[any, never, 1, '2', true, boolean], 2>             // [1,'2',true,boolean]
type A5 = Slice<[any], 2>                                           // []
type A6 = Slice<[], 0>                                              // []
```
</details>

<details>
<summary>14. Splice</summary>

```TypeScript
// 删除并且替换部分元素
type A = [string, number, boolean, null, undefined, never]
type A1 = Splice<A, 0, 2>                   // [boolean,null,undefined,never]
type A2 = Splice<A, 1, 3>                   // [string,undefined,never]
type A3 = Splice<A, 1, 2, [1, 2, 3]>        // [string,1,2,3,null,undefined,never]
```
</details>

### 总结

> 1. 善用元组长度来解决有数字计算的问题
> 2. 对于多个数字的操作，可以添加多个临时元组，不要被表面复杂吓到
> 3. 使用递归的过程中，要知道每一次的参数到底是什么
> 4. 复杂的问题要冷静逐步分析求解，明确需要达到的目标，切忌急躁
