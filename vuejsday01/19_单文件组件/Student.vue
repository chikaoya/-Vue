<template>
<div class="demo">
					<h2>学校名称：{{name}}</h2>
					<h2>学校地址：{{age}}</h2>
				</div>
</template>

<script>
// 3.将组件暴露出去，让别人引用
export default{
	// 2.给组件添加id，方便识别
  name:'Student',
	// 1.先创建一个组件
    data(){
				return {
					name:'李斯',
					age:19
				}
			}
      }
</script>

<style>

</style>