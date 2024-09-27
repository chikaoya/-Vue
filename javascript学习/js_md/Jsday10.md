正则表达式

![image-20240720102737852](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240720102737852.png)

正则表达式是匹配字符串组合的模式，用来表单验证（匹配）

过滤敏感词（替换），字符串中提取我们想要的部分（提取）

语法

![image-20240720103123379](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240720103123379.png)

```js
const str='我们学前端，希望那高薪'
const reg = /前端/ //定义规则
console.log(reg.test(str)) //是否匹配 返回值为true 或 false
```

exec()语法 用的少重点记住test()

![image-20240720103635232](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240720103635232.png)

元字符的概念，就是特殊字符

![image-20240720103901840](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240720103901840.png)

规则

![image-20240720104118896](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240720104118896.png)

```js
(/^哈/) //以哈开头

(/哈$/)//以哈结尾

(/^哈$/) //以哈开头 以哈结尾 精确匹配 	
```

量词

```js
//*
console.log(/^哈*$/.test('哈')) //true
//+
console.log(/^哈+$/.test('哈')) //true
//?
console.log(/^哈?$/.test('哈')) //true

//{n} 精确 ===
console.log(/^哈{3}$/.test('哈'))//false
console.log(/^哈{3}$/.test('哈哈'))//false
console.log(/^哈{3}$/.test('哈哈哈'))//true

//{n,}  >=
console.log(/^哈{3,}$/.test('哈'))//false
console.log(/^哈{3,}$/.test('哈哈'))//false
console.log(/^哈{3,}$/.test('哈哈哈'))//true
console.log(/^哈{3,}$/.test('哈哈哈哈'))//true

//{n,m} >=n && <=m   逗号两旁不能有空格 不然会报错
console.log(/^哈{2,4}$/.test('哈'))//false
console.log(/^哈{2,4}$/.test('哈哈'))//true
console.log(/^哈{2,4}$/.test('哈哈哈'))//true
console.log(/^哈{2,4}$/.test('哈哈哈哈'))//true
console.log(/^哈{2,4}$/.test('哈哈哈哈'))//false
```

![image-20240720113808173](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240720113808173.png)

字符类

![image-20240720113905793](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240720113905793.png)

```

```

![image-20240720114625332](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240720114625332.png)

括号外面是首字匹配 括号里面是取反

![image-20240720114751859](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240720114751859.png)

```js
console.log(/^[^a-zA-Z0-9]$/.test('A'))//false
```

![image-20240720114839539](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240720114839539.png)

```js
console.log(/./.test('A'))//true
console.log(/./.test('Ab'))//true
console.log(/^.$/.test('Ab'))//false
```

预定义

![image-20240720135514847](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240720135514847.png)

修饰符

![image-20240720135723556](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240720135723556.png)

```js
console.log(/a/i.test('a'))//true
console.log(/a/i.test('A'))//true
```

contains()

![image-20240720175723618](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240720175723618.png)
