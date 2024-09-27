/**
 * 目标1：完成省市区下拉列表切换
 *  1.1 设置省份下拉菜单数据
 *  1.2 切换省份，设置城市下拉菜单数据，清空地区下拉菜单
 *  1.3 切换城市，设置地区下拉菜单数据
 */
// 1.1 设置省份下拉菜单数据
axios({
  url:'http://hmajax.itheima.net/api/province',
}).then(result=>{
  console.log(result);
  const potionStr=result.data.list.map(pname=>
    `<option value="${pname}">${pname}</option>`
  ).join('')
  // console.log(potionStr);//测试打印是否成功遍历
  document.querySelector('.province').innerHTML=`<option value="">省份</option>`+potionStr
})

//  1.2 切换省份，设置城市下拉菜单数据，清空地区下拉菜单
document.querySelector('.province').addEventListener('change',async e=>{
  console.log(e.target.value);
  const result=await axios({
    url:'http://hmajax.itheima.net/api/city',
    params:{pname:e.target.value}
  })
  // console.log(result);
  const optionStr =result.data.list.map(cname =>`<option value="${cname}">${cname}</option>`).join('')
  // console.log(optionStr);
  // 把默认城市选项+下属城市数据插入到select中
  document.querySelector('.city').innerHTML=`<option value="">城市</option>`+optionStr
  // 清空地区数据
  document.querySelector('.area').innerHTML=`<option value="">地区</option>`
})

//   1.3 切换城市，设置地区下拉菜单数据
document.querySelector('.city').addEventListener('change',async e=>{
  // console.log(e.target.value);
  const result=await axios({
    url:'http://hmajax.itheima.net/api/area',
    params:{
      pname:document.querySelector('.province').value
      ,cname:e.target.value
    }
  })
  // console.log(result);
  const optionStr=result.data.list.map(area=>
    `<option value="${area}">${area}</option>`
  ).join('')
  // console.log(optionStr);
  document.querySelector('.area').innerHTML=`<option value="">地区</option>`+optionStr
  
})


/* 
目标2：收集数据提交保存
2.1 监听提交的点击事件
2.2 依靠插件收集表单数据
2.3 基于axios提交保存，显示结果 */
// 2.1 监听提交的点击事件
 document.querySelector('.submit').addEventListener('click',async ()=>{
  // 2.2依靠插件收集表单数据
  const form=document.querySelector('.info-form')
  const data =serialize(form,{hash:true,empty:true})
  console.log(data);

  // 2.3 基于axios提交保存，显示结果
  try{
    const result=await axios({
    url:'http://hmajax.itheima.net/api/feedback',
    method:'POST'
    ,data
  })
  // console.log(result);
  alert(result.data.message)
  }catch(error){
    // console.log(error);
    alert(error.response.data.message)
  }
})