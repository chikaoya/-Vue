![image-20240712125601447](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240712125601447.png)

声明变量优先用const

基本数据类型，经常改变的数据用let	 

dom对象总结

![image-20240712133833648](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240712133833648.png)

```javascript
document.querySelector()//选择器，只能获取第一个
```

```javascript
document.querySelectorALL()//选择所有的
```

![image-20240712134531692](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240712134531692.png)

~~~javascript
<div class='hhh'></div>
document.querySelector('hhh')//选择的就是标签名为hhh的盒子
document.querySelector('div')//等同于这个 
~~~



元素选择器总结

![image-20240712134729515](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240712134729515.png)

```javascript
document.querySelectorALL()//获取的数组是伪数组
```

![image-20240712135744991](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240712135744991.png)

总结

![image-20240712135925614](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240712135925614.png)

innerText 识别的是纯文本不解析标签

```js
innerText='<div></div>'//不识别
```

操作元素样式属性

![image-20240712161730792](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240712161730792.png)

className操作元素样式属性 只能有一个class 因为会覆盖前面的类名

```
 const div = document.querySelector('div')

    div.style.width='600px'//可以识别单位
```

![image-20240712163849946](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240712163849946.png)

用className之前要查看覆盖的旧类名有没有属性，如果有就需要用

属性.classNmae='旧属性 新属性' 保留之前的类名

操作元素样式属性最优解 classList

![image-20240712164514778](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240712164514778.png)

className和classList的区别，一个会覆盖，一个不覆盖，而且list会更方便

```js
div.classList.add('')//添加
div.classList.remove('')//移除
div.classList.toggle('')//转换
```

![image-20240712165654559](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240712165654559.png)

自定义属性data-    开头

```js
<div class='box' data-id='1'> </div>
console.log(box.dataset.id)//操作自定义属性
```

![image-20240712184233268](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240712184233268.png)

定时器 setInterval

![image-20240712191156868](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240712191156868.png)

关闭定时器 clearInterval

```js
setInterval(function,1000)//开启定时器
clearInterval()//关闭定时器
```

