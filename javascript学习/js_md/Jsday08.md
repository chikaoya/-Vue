```js
	const date =new Date
    console.log(date);	//Wed Jul 17 2024 11:11:07 GMT+0800 (中国标准时间)
    const date1 =new Date('2020-11-15 08:00:00')	
    console.log(date1); //Sun Nov 15 2020 08:00:00 GMT+0800 (中国标准时间)
```

日期实例化

![image-20240717111340536](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240717111340536.png)

```js
	const date =new Date
    console.log(date.getFullYear());//2024
    console.log(date.getMonth()+1);//7
    console.log(date.getDate());//17
    console.log(date.getDay());//3
    console.log(date.getHours());//11
    console.log(date.getMinutes());//15
    console.log(date.getSeconds());//57
```

![image-20240717113500179](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240717113500179.png)

```js
const div = document.querySelector('div')
    function getDate() {
      const date = new Date
      let h = date.getHours()
      let m = date.getMinutes()
      let s = date.getSeconds()
      h = h < 10 ? '0' + h : h
      m = m < 10 ? '0' + m : m
      s = s < 10 ? '0' + s : s
      return `今天是 ${date.getFullYear()}年${date.getMonth()+1}月${date.getDate()}日 
      ${h}:${m}:${s}`
    }
    div.innerHTML = getDate()
    setInterval(function(){
    div.innerHTML = getDate()

    },1000)
```

![image-20240717144124336](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240717144124336.png)

时间戳

![image-20240717144756855](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240717144756855.png)

获得时间戳的三种方式

![image-20240717145107748](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240717145107748.png)

```js
const date = new Date
    console.log(date.getTime());
    console.log(+new Date);
    console.log(Date.now());//不可更改
```

DOM节点

![image-20240718131846393](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240718131846393.png)

```js
<div class="yeye">
    <div class="father">
      <div class="son"></div>
    </div>

const son = document.querySelector('.son')
    console.log(son);
    console.log(son.parentNode);
    console.log(son.parentNode.parentNode);
```

![image-20240718135424447](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240718135424447.png)

```js
console.log(son.parentNode);
```

![image-20240718135736836](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240718135736836.png)

```js
console.log(li2.previousElementSibling); //获取上一项console.log(li2.nextElementSibling);     //获取下一项
```

![image-20240718140409967](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240718140409967.png)

```
document.createElement('div')
```

![image-20240718140850817](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240718140850817.png)

```js
const div = document.createElement('div')
    // 追加节点 作为最后一个元素
    document.body.appendChild(div) 
 div.insertBefore(div,div.children[0])
```

会追加到最后面去

![image-20240718143557645](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240718143557645.png)

克隆节点

![image-20240718145916780](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240718145916780.png)

删除节点

![image-20240718150807701](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240718150807701.png)

```js
ul.removeChild(li)
```

移动端

![image-20240718150923323](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240718150923323.png)
