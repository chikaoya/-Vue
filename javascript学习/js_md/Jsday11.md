局部作用域，let和var声明的变量 作用域不同，var没有作用域概念

![image-20240721135623175](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240721135623175.png)

全局作用域，卸载最外层的就是全局作用域

![image-20240721135818100](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240721135818100.png)

作用域链 可以用冒泡机制来理解 或者用就近原则来理解

![image-20240721140110677](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240721140110677.png)

垃圾回收机制

![image-20240721140643779](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240721140643779.png)

引用计数了解一下

![image-20240721140801008](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240721140801008.png)

![image-20240721140812126](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240721140812126.png)

嵌套引用 内存泄漏

![image-20240721141311896](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240721141311896.png)

标记清楚法

![image-20240721141635089](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240721141635089.png)

如图所示

![image-20240721141643087](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240721141643087.png)

闭包的概念

![image-20240721172844847](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240721172844847.png)

```js
//闭包常见使用场景
function outer(){
let a =100
function f(){
console.log(a)
}
return fn
}
//outer() === fn ===function fn(){}
//const fun =function fn(){ }
const fun =outer()
fun()//调用函数
//外部函数使用内部函数的变量
```

闭包实现数据私有化，闭包会产生内存泄漏

![image-20240721174911367](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240721174911367.png)

变量提升了解一下 只提升声明，不提升赋值 

![image-20240721182056668](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240721182056668.png)

es6新特性就包括let 和const 引入了全局和局部作用域的概念因此let和const不会被变量提升所影响

函数提升 只提升函数声明，不提升函数调用

![image-20240721182507217](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240721182507217.png)

动态参数 arguments 伪数组

![image-20240721184041929](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240721184041929.png)

剩余参数 真数组 只在函数参数中使用

![image-20240721185135628](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240721185135628.png)

```js
function getSum(a,b,...arr){
console.log(arr)
}
getSum(1,2)
getSum(1,2,3,4,5,6,7,8)//arr[1,2,3,4,5,6,7,8]
```

展开运算符 只在数组中使用

![image-20240721185350552](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240721185350552.png)

![image-20240721185542349](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240721185542349.png)

箭头函数 !important

![image-20240721190037975](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240721190037975.png)

```js
//语法有四种 基本写法 
//普通函数
const fn =function(){ console.log('我是普通函数')}
fn()
//箭头函数，1.基本写法
const fn = () => {console.log('我是普通函数')}
fn()
//语法2.只有一个参数可以省略小括号
const fn = x => {console.log(x)}
fn(1)//1
//语法3.
//语法3.如果函数体只有一行代码，可以写道一行上，并且无需写return直接写返回值
const fn = (x,y)=> x + y
console.log(fn(1,2))//3
const fn = function(x,y){return x+y}
console.log(fn(1,2))//3  
```

语法4

![image-20240721191231341](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240721191231341.png)

箭头函数里没有arguments 但是可以用剩余参数...

箭头函数 this

![image-20240721193224591](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240721193224591.png)

箭头函数this 指向上一层的作用域

![image-20240721193725884](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240721193725884.png)

![image-20240721193844860](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240721193844860.png)

![image-20240721193830105](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240721193830105.png)

数组解构 就是赋值变量

![image-20240721205647861](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240721205647861.png)

```js
const [a,b,c] =[1,2,3]
console.log(a)
console.log(b)
console.log(c)
```

```js
// 立即执行函数要加
    (function(){})();
    (function(){})();
    // 使用数组的时候
    const str = 'pink'
  [1,2,3].map(function(item){
    console.log(item);
  })
  let a =1 
  let b =2 
  ;[b,a]=[a,b]
  console.log(a,b)
```

变量少：undefined

![image-20240721213840482](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240721213840482.png)

默认值

![image-20240721214017987](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240721214017987.png)

按需导入

![image-20240721214109410](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240721214109410.png)

![image-20240721214306630](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240721214306630.png)

对象解构

![image-20240721215427854](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240721215427854.png)

多级对象解构

![image-20240721221650378](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240721221650378.png)

遍历数组 forEach() 只遍历没有返回值 加强版的for循环 !important

![image-20240722114205497](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240722114205497.png)

filter方法  !important 可以用大于小于号

![image-20240722122600082](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240722122600082.png)