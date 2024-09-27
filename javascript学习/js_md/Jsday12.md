创建对象三种方式

![image-20240722155651265](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240722155651265.png)

自定义构造函数创建对象

```
//两个约定
//只能以大写字母开头命名
//只能由new操作符执行
//创建一只猪
function Pig(uname,age){
this.uname=uname
this.age=age
}
console.log(new Pig('佩奇',6))//Pig{uname:'佩奇',age:6}
```

构造函数是一个函数，用来初始化对象，可以快速创建多个对象

![image-20240722155852400](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240722155852400.png)

![image-20240722162118893](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240722162118893.png)

这四步面试题

![image-20240722165947864](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240722165947864.png)

实例成员

![image-20240722172855089](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240722172855089.png)

```js
function Pig(name){
      this.name = name 
    }
    const peiqi =new Pig('佩奇')
    const qiaozhi =new Pig('佩乔治')
    peiqi.name ='小猪佩奇'
    peiqi.sayHi=()=>{
      console.log('Hi~~~');
    }
    // 虽然构造的函数是相同的但是地址是不同的，因为名字不同所以开辟了不同的地址
    console.log(peiqi);
    console.log(qiaozhi);
    console.log(peiqi===qiaozhi);//false
```

静态成员

![image-20240722171818447](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240722171818447.png)	 

```js
 // 静态成员：构造函数上的属性和方法称为静态成员
    function Pig(name){
      this.name=name
    }
    Pig.eyes=2 //静态属性
    Pig.sayHi=function(){//静态方法
      console.log(this);
    }
    Pig.sayHi()//指向这个函数this.name=name
    console.log(Pig.eyes);//2
```

![image-20240722172728159](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240722172728159.png)

JS底层自动包装，基本数据类型变成复杂数据类型

![image-20240722174140417](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240722174140417.png)

Object

![image-20240722174917720](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240722174917720.png)

```js
// 创建一个对象
    const o = {uname:'佩奇',age:6}
    // 获得属性
    console.log(Object.keys(o));//得到的是数组 [uname,age]
    // 获得值
    console.log(Object.values(o));//得到的是数组['佩奇',6]
    // 对象拷贝  
    const oo={}
    Object.assign(oo,o)
    console.log(oo);
```

了解即可

![image-20240722175501046](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240722175501046.png)

数组方法

![image-20240722175707636](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240722175707636.png)

reduce()语法

![image-20240722175754145](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240722175754145.png)

数组常用方法-其他方法

![image-20240722185634066](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240722185634066.png)

![image-20240722203913824](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240722203913824.png)

```js
   <ul>
      <li></li>
      <li></li>
      <li></li>
    </ul>
    
    const lis= document.querySelectorAll('li')
    const liss =Array.from(lis)
    liss.pop()
    console.log(liss);
```

String 实例方法

![image-20240722204424385](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240722204424385.png)

Split()方法能够将字符串转换为数组

```
const  str='pik,red'
    const arr=str.split(',')
    console.log(arr);//['pik', 'red']
```

substring(start[,end])

```js
// 字符串的截取substring(开始[,结束])
    // 省略结束符一直输出到最后一位
    // 存在结束符，结束符位5则不输出第五位的字符
    const str1='今天又要干嘛了'
    console.log(str1.substring(4,5));//干
```

startWith() *判断是不是以某个字符开头*

```js
// 3.startWith 判断是不是以某个字符开头
    const str2='pink老师在思考'
    console.log(str2.startsWith('pink'));//true
```

*includes() 判断某个字符是不是包含在一个字符串里面*

```js
// 4.includes 判断某个字符是不是包含在一个字符串里面
    const str3='To be,not to be,that is the question'
    console.log(str3.includes('To be'));//ture
    console.log(str3.includes('To Be'));//false
    console.log(str3.includes('To be',1));//false
```

toFixed() 保留小数位的长度

![image-20240722212040103](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240722212040103.png)

```js
// toFixed 方法
    const num =10.923
    console.log(num.toFixed());//11
    console.log(num.toFixed(1));//10.9
    const num1=10
    console.log(num1.toFixed(2));//10.00
```

toString()方法 String()s方法

```
const num=10
console.log(String(num))//10
console.log(num.toString())//10
```

