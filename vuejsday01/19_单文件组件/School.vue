<template>
<div class="demo">
					<h2>学校名称：{{name}}</h2>
					<h2>学校地址：{{address}}</h2>
					<button @click="showName">点我提示学校名</button>	
				</div>
</template>
<script>
	// 3.将组件暴露出去，让别人引用
export default{
	// 2.给组件添加id，方便识别
  name:'School',
		// 1.先创建一个组件
    data(){
				return {
					name:'尚硅谷',
					address:'北京昌平'
				}
			},
			methods: {
				showName(){
					alert(this.name)
				}
			}
      }
</script>

<style>
.demo{
	background-color:orange ;
}
</style>