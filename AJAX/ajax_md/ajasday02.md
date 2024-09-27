bootstrap弹框 设置 显示和关闭

![image-20240730145352845](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240730145352845.png)



```html
//toggle 和target同时设置才能显示弹框，dismiss设置就关闭弹框
<button data-bs-toggle='modal' data-bs-target='css选择器'>显示弹框</button>
<button data-bs-dismiss='modal'>close</button>
```

弹框收集数据

![image-20240730145852295](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240730145852295.png)

```js
//先引入bs的js
//然后创建弹框对象
const modalDom = document.querySelector('.name-box')
const modal = new bootstrap.Modal()

//编辑姓名->点击->弹框显示
document.querySelector('.edit-btn').addEventLisentener('click',()=>{
    //赋予默认值
    document.querySelector('.username').value='默认姓名'
//显示弹框
modal.show()
})
//保存->点击->弹框隐藏
document.querySelector('.save-btn').addEventLisentener('click',()=>{
    //获得数据操作如下
    const username = document.querySelector('.username').value
    console.log('模拟吧姓名保存到服务器上',username)
//隐藏弹框
modal.hide()
})
```

![image-20240730150421832](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240730150421832.png)



增删改查项目核心

查询核心

![image-20240729222213970](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240729222213970.png)

新增核心

![image-20240729222325808](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240729222325808.png)

删除核心

![image-20240729222406294](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240729222406294.png)



![image-20240729222453040](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240729222453040.png)

编辑核心 下

![image-20240729222511985](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240729222511985.png)

图片上传 更换背景等具体操作访问网址

[AAA]: https://apifox.com/apidoc/shared-1b0dd84f-faa8-435d-b355-5a8a329e34a8	"B站-AJAX和黑马头条-数据管理平台"

![image-20240730155500303](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240730155500303.png)

课后作业

什么是回流什么是重绘。

页面由DOM树和CSSOM树组成渲染树，进行回流。

当页面的布局发生变化，则会进行回流，展示新的页面布局。

如果页面没有发生变化，仅仅只是字体颜色和背景颜色改变时，不会发生回流，只需要将新的效果渲染到页面就行，这个叫重绘

触发回流一定会触发重绘，因为属性尺寸改变，画面一定重新渲染