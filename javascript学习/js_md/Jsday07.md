 事件监听

![image-20240713134629621](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240713134629621.png)

​	

事件监听版本

![image-20240713152219643](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240713152219643.png)

L0的问题有很多，会出现函数被覆盖，而新版本的可以绑定多次

![image-20240713152317190](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240713152317190.png)

事件对象 是个对象

![image-20240714101501136](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240714101501136.png)

![image-20240714101757743](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240714101757743.png)

```js
trim()//去除字符左右俩侧空白符
```

环境对象

![image-20240714144500268](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240714144500268.png)

回调函数 把函数当参数传递给另一个函数就叫做回调函数

~~~javascript

btn.addEventLisenner('click',function(){
    alert('我也是回调函数')
})
~~~



![image-20240714144120187](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240714144120187.png)

事件捕获 L2为true 是事件捕获

```js
DOM.addEventListener('click',function(){},true)
```

![image-20240714174528255](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240714174528255.png)

事件冒泡 L2为false 是事件捕获

```js
DOM.addEventListener('click',function(){},false)
```

![image-20240714175357956](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240714175357956.png)

阻止传播==阻止冒泡 propagation 传播 繁殖

![image-20240714175610892](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240714175610892.png)

L0事件解绑 了解

![image-20240714175851292](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240714175851292.png)

L2事件解绑

![image-20240714180022858](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240714180022858.png)

~~~javascript
const btn = document.querySelector('button')
function fn(){
    alert('点击了')
}
//添加事件监听
btn.addEventListener('click',fn)
//删除事件监听
btn.removeEventListener('click',fn)
~~~

![image-20240714181018369](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240714181018369.png)

L0和L2的区别

![image-20240714181121685](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240714181121685.png)

事件委托

![image-20240715105724304](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240715105724304.png)



```js
<ul>
    <li>我是第1个元素</li>
    <li>我是第2个元素</li>
    <li>我是第3个元素</li>
    <li>我是第4个元素</li>
    <li>我是第5个元素</li>
    <p>我是p</p>
  </ul>
    // 获取父元素
    const ul = document.querySelector('ul')
    ul.addEventListener('click',function(e){
      // 运用事件对象 e
      // e.target.style.color='red' // 点击那个哪个变红色
      console.dir(e.target);
      if(e.target.tagName==='LI'){
        e.target.style.color='red'
      }
    })
```

阻止元素默认行为

![image-20240715115444438](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240715115444438.png)

页面加载事件

![image-20240715131146757](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240715131146757.png)

~~~javascript
window.addEventListener('load',function(){
    //操作
})
~~~

另外一种页面加载事件，这俩种事件DOMcontentLoaded加载速度更快

![image-20240715131432963](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240715131432963.png)

页面滚动事件

![image-20240715142558240](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240715142558240.png)

~~~javascript
document.documentElement.scrollTop=800
window.addEventListener('scroll',function(){
    //必须写在里面
    const n = document.documentElement.scrollTop
    //得到的数据是 数字型，不带单位 所以可以对数据进行读和写
})
~~~

页面尺寸事件

![image-20240715154929468](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240715154929468.png)

![image-20240715155535111](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240715155535111.png)

![image-20240715155557937](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240715155557937.png)

元素尺寸总结

![image-20240715161051641](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240715161051641.png)

![image-20240715174009741](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240715174009741.png)