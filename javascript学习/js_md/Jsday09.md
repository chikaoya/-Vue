![image-20240718210059858](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240718210059858.png)

定时器，延时函数

![image-20240719125459354](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240719125459354.png)

同步异步

![image-20240719131333293](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240719131333293.png)

![image-20240719131517454](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240719131517454.png)

执行机制

![image-20240719132009043](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240719132009043.png)

location属性如下

![image-20240719134344391](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240719134344391.png)

![image-20240719134421906](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240719134421906.png)

```js
location.href //属性获取完整的URL地址，对赋值地址进行跳转
location.search //属性获取地址中携带的参数，符号?后面部分
location.hash //获取#后面的数据
location.reload()//刷新页面
```

histroy对象

![image-20240719135506781](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240719135506781.png)

![image-20240719135828765](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240719135828765.png)

本地存储

![image-20240719140952418](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240719140952418.png)

localstorage

![image-20240719141156428](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240719141156428.png)

```js
localStorage.setItem('uname','pink老师')//存储方式
console.log(localStorage.getItem('uname'))//获取方式 都加引号
localStorage.removeItem('uname')//删除方式 
localStorage.setItem('uname','red老师') //改，如过有就是改，没有就是增
// 本地存储只能存储字符串类型 使用的时候记得转换
localStorage,setItem('age',18)
console.log(localStorage.getItem('age'))
```

![image-20240719143404570](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240719143404570.png)

复杂数据类型存储

![image-20240719145012395](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240719145012395.png)

```js
//复杂数据类型存储，必须转换为JSON字符串存储
localStorage.setItem('obj',JSON.stringify(obj))

// 取
    // 把JSON字符串转换为对象
    console.log(JSON.parse(localStorage.getItem('obj')));
```

总结

![image-20240719150147167](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240719150147167.png)

![image-20240719150155968](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240719150155968.png)

两个方法

![image-20240719222724157](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240719222724157.png)

map() 有返回值

![image-20240719222920894](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240719222920894.png)