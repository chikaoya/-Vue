object是对象类型，无序的集合

![image-20240711133251461](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240711133251461.png)

![image-20240711133416526](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240711133416526.png)

###### 对象的增删改查

![image-20240711134514497](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240711134514497.png)

查 student.name

![image-20240711134530198](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240711134530198.png)

改 student.name ='XXX'

![image-20240711134836813](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240711134836813.png)

增 增和改的方法一致，如果有该属性则进行改，如果没有该属性则进行增

![image-20240711135149141](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240711135149141.png)

删

![image-20240711135421138](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240711135421138.png)

总结

查的俩种方法如下

![image-20240711140146359](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240711140146359.png)

对象中声明方法，函数规则如下

![image-20240711140643467](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240711140643467.png)

遍历对象

![image-20240711142039412](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240711142039412.png)

内置对象

![image-20240711153051922](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240711153051922.png)

动态添加方法

![image-20240711154542472](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240711154542472.png)

null看成一个空对象

![image-20240711154629942](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240711154629942.png)

遍历对象

~~~javascript
let obj = {
    uname:'pink'
}
for(let k in obj ){
    //k 属性名 字符串 带引号
    //obj[k] 属性值	obj['uname'] 
}
~~~

