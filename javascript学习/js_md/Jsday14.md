深浅拷贝 -浅拷贝 浅拷贝只拷贝外面的一层，拷贝了值

![image-20240725134603020](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240725134603020.png)

![image-20240725135140175](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240725135140175.png)

​	深拷贝

![image-20240725135340366](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240725135340366.png)

递归     函数在函数体内调用自己

![image-20240725135351612](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240725135351612.png)

throw 抛异常

![image-20240726144310666](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240726144310666.png)

```js
try catch 捕获异常

拦截错误，提示浏览器提供的错误信息，但是不中断程序的执行

需要加return 中断程序

或者搭配 throw 使用 出错就抛出

finally 关键字  不管程序对不对，里面的代码一定会执行
```

![image-20240726145404771](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240726145404771.png)

调试代码用debugger

![image-20240726150030247](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240726150030247.png)

this 指向

普通函数 this 指向： 谁调用指向谁

<img src="C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240726151356633.png" alt="image-20240726151356633"  />

箭头函数 this指向

![image-20240726153953730](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240726153953730.png)

注意事项1： 如果使用箭头函数前需要用函数的this，则不推荐使用箭头函数

![image-20240726154242373](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240726154242373.png)

注意事项2：原型对象里不要使用箭头函数

![image-20240726155100293](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240726155100293.png)

call()函数使用

```js
const obj ={
uname:'pink'
}
function fn(x,y){
console.log(this)//window
console.log(x+y)
}
//调用参数
//改变this指向
fn.call(obj,1,2)//pink,3
```

apply(this指向谁，数组参数) 函数使用![image-20240726161559112](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240726161559112.png)

```js
const obj ={
age:18
}
function fn(x,y){
console.log(this)//{age:18}
console.log(x+y)
}
//调用参数
//改变this指向
fn.aplly(obj,[1,2])//obj,3
//返回值 本身就是在调用函数，所以返回值就是函数的返回值
```

bind()  重点 ！important 返回值是函数所以要重新调用

![image-20240726163059082](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240726163059082.png)

```js
const obj = {
      age: 18
    }
    function fn(x, y) {
      console.log(this)
    }
    //1.bind 不会调用函数
    //2.能改变this 指向
    //3.返回值是个函数，但是这个函数里面的this是更改过的obj
    const fun =fn.bind(obj)
    //console.log(fun)
    fun()
```

call apply bind总结

![image-20240726171818245](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240726171818245.png)

防抖，节流

防抖 **_.debounce**（函数，延迟时间）

节流 **_.throttle**（函数，延迟时间）

![image-20240726205035368](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240726205035368.png)