原型链

原型对象

![image-20240724141607617](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240724141607617.png)

原型this指向，构造函数和原型this指向的都是实例化对象

![image-20240724141621223](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240724141621223.png)

constructor属性

![image-20240724142618451](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240724142618451.png)

constructor可以用来，指回创造的构造函数

![image-20240724143341659](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240724143341659.png)

对象原型

![image-20240724183122532](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240724183122532.png)

关系如图所示

![image-20240724183923006](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240724183923006.png)

总结

![image-20240724183945709](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240724183945709.png)

画图

![image-20240724184656709](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240724184656709.png)

原型继承

用原型prototype去继承构造函数，让方法互不干扰

![image-20240724194435760](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240724194435760.png)

原型链：只要是对象就有_proto__只要是原型对象就有constructor

![image-20240724214952786](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240724214952786.png)

原型链就是一个查找规则，保证你使用方法的时候不出错

![image-20240724215951590](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240724215951590.png)

instanceof() 方法

```
function Person(){}
const ldh = new Person()
console.log(ldh instanceof Person)//true 
//简单来说这个方法就是来判断ldh属不属于这个构造函数
```

