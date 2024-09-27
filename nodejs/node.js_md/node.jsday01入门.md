什么是nodejs?

![image-20240804192519715](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240804192519715.png)

前端工程化包括哪些？

统一编写风格-格式化工具

压缩工具-压缩代码大小，空格符额回车换行等，以便更快在用户端电脑响应

转换工具-less，css转换

打包工具，项目做完之后进行打包

以上工具都离不开node.js

![image-20240804192540802](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240804192540802.png)

node.js安装 版本推荐16.19.0.msi

![image-20240804193125848](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240804193125848.png)

总结

![image-20240804210615554](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240804210615554.png)

fs模块读写

![image-20240804211929756](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240804211929756.png)

path模块-路径处理

![image-20240804220057035](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240804220057035.png)

压缩html

![image-20240804221224281](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240804221224281.png)

端口号

![image-20240804222736068](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240804222736068.png)

*基于 http 模块创建 Web 服务程序*

```js
// 1.1 加载 http 模块，创建 Web 服务对象
const http=require('http')
const server=http.createServer()
server.on('request',(req,res)=>{
  // 设置响应头-内容类型-普通文本以及中文编码格式
  res.setHeader('content-Type','text/plain;charset=utf-8')
  // 设置响应体内容，结束本次 请求与响应
  res.end('欢迎使用 Node.js和http模块创建的 Web服务')
})
// 1.3 配置端口号并启动 Web 服务
server.listen(3000,()=>{
  console.log('Web 服务启动成了！');
})
```

