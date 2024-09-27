/* 
目标 在node.js 环境的代码中，应使用绝对路径
原因 代码的相对路径是以中断所在的文件夹为起点，而不是Vscocde 资源管理器
容易造成目标文件找不到的错误
*/
const fs =require('fs')
// 引入path模块对象
const path=require('path')
// 2调用path.join()配合__dirname组成目标文件的绝对路径
// fs.readFile('./test.txt',(err,data)=>{
  console.log(__dirname);
fs.readFile(path.join(__dirname,'../test.txt'),(err,data)=>{
  if(err) console.log(err)
  else console.log(data.toString());
})