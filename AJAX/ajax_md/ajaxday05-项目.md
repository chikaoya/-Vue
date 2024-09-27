验证码登录

![image-20240803161149011](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240803161149011.png)

token的介绍

![image-20240803161612388](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240803161612388.png)

请求拦截器

![image-20240803162717053](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240803162717053.png)

拦截器详情

![image-20240803162843857](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240803162843857.png)

响应拦截器

![image-20240803165322724](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240803165322724.png)

富文本编辑器访问wangEditor网站

![image-20240803184408242](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240803184408242.png)

在需要的位置放置代码html

```html
html:
<div id="editor—wrapper"> 
<div id="toolbar-container"><!-- 工具栏 --></div>
<div id="editor-container"><!-- 编辑器 --></div>
     </div>
```

引入css

```css
引入css：
#editor—wrapper {
  border: 1px solid #ccc;
  z-index: 100; /* 按需定义 */
}
#toolbar-container { border-bottom: 1px solid #ccc; }
#editor-container { height: 500px; }

```

```js
引入js
const { createEditor, createToolbar } = window.wangEditor

// 编辑器配置对象
const editorConfig = {
  // 占位提示文本
  placeholder: '发布文章内容...',
  // 编辑器变化时回调函数
  onChange(editor) {
    // 获取富文本内容
    const html = editor.getHtml()
    console.log('editor content', html)
    // 也可以同步到 <textarea>
    // 为了后续快速收集整个表单内容做铺垫
    document.querySelector('.publish-content').value = html
  }
}
//创建编辑器
const editor = createEditor({
  // 创建位置
  selector: '#editor-container',
  // 默认内容
  html: '<p><br></p>',
  // 配置项
  config: editorConfig,
  // 配置集成模式(default 全部)(simple 简洁) 
  mode: 'default', // or 'simple'
})
// 工具栏配置对象
const toolbarConfig = {}
// 创建工具栏
const toolbar = createToolbar({
  // 为指定的编辑器创建工具栏
  editor,
  // 工具栏创建的位置
  selector: '#toolbar-container',
  // 工具栏配置对象
  config: toolbarConfig,
  // 配置集成模式
  mode: 'default', // or 'simple'
})
```

